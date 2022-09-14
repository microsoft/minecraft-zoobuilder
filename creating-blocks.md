# Defining blocks for Minecraft

This document provides a quick guide on how to make blocks in an extension for pxt-minecraft. For full documentation on defining blocks, see [defining blocks](https://makecode.com/defining-blocks) in the MakeCode docs.


## Creating a category

All blocks in an extension should be placed inside of a namespace. When choosing the namespace for your extension, avoid namespaces that already exist (e.g. `blocks`) or common words that might clash with user variable names (e.g. `item`).

Once you've settled on a name, you can set the icon, display name, and color for your category like so:

```ts
//% block="Custom"
//% color="#eb4034"
//% icon="\uf007"
namespace custom {

}
```

In the above snippet, the `block` annotation is used for setting the category name.

### Choosing an icon

Our category icons are made using FontAwesome 5. To find the correct value for a particular icon:

1. Go to https://fontawesome.com/v5/search?o=r&m=free&f=classic
2. Find an icon you like and click on it. Make sure you are selecting an icon in the free tier and the "classic" set of icons (not "brands")
3. Above the code snippet for the icon, you'll see a unicode character code (e.g. `f0ad`)
4. Copy that code and set it in the icon annotation with `\u` in front (e.g. `icon="\uf007"`)


## Defining a block

All blocks are defined as TypeScript functions. You control the appearance of the block by using special `//%` annotations above the function definition. Every block should have the following annotations:

1. `blockId` - This sets the id of the block. It should be unique for each block and include the name of your extension to prevent clashes with other extensions
2. `block` - This allows you to control the words and arguments that appear on your block

```ts
namespace custom {
    //% blockId=my_extension_example_block
    //% block="my example block"
    export function exampleBlock() {

    }
}
```

### Adding arguments

If the block defining your function takes in arguments, MakeCode will add inputs to your block that the user can drag values into. You can use the `block` annotation to control where these arguments appear.

When referencing arguments in the `block` annotation, use the name you gave the argument in the function definition preceded by a `$`:

```ts
namespace custom {
    //% blockId=my_extension_example_block_with_args
    //% block="this block has a number $myNum and a boolean $myBool"
    export function exampleBlockWithArgs(myNum: number, myBool: boolean) {

    }
}
```

### Optional arguments

Blocks can also have optional arguments. These arguments will be hidden by default and present the user with a `+` button that they can use to expand the block. To define where this optional argument button appears, use `||` in your block annotation:

```ts
namespace custom {
    //% blockId=my_extension_example_block_with_optional_args
    //% block="this block has a number $myNum ||and an optional boolean $optionalBoolean"
    export function exampleBlockWithOptionalArgs(myNum: number, optionalBoolean?: boolean) {

    }
}
```

## Common Minecraft argument types

By default, MakeCode will infer the correct block to place for arguments that are primitive types. Strings, numbers, and booleans require no extra annotations to render correctly in a block.

However, for many argument types there exists a "shadow" block that is used to provide UI for picking a value.

### Block, Item, and Mob types

Blocks, items, and mobs are all internally represented as numbers. By adding a `shadow` annotation, you can make it so that the user is presented with a gridpicker for selecting a value rather than the default number block.

This example shows how to set the shadow block and default value for some common number types:

```ts
namespace custom {
    //% blockId=my_extension_name_mob_argument
    //% block="mob argument $mob"
    //% mob.shadow=minecraftAnimal
    //% mob.defl=AnimalMob.Squid
    export function mobArgument(mob: number) {

    }

    //% blockId=my_extension_name_monster_argument
    //% block="monster argument $monster"
    //% monster.shadow=minecraftMonster
    //% monster.defl=MonsterMob.Skeleton
    export function monsterArgument(monster: number) {

    }

    //% blockId=my_extension_name_block_argument
    //% block="block argument $blockArg"
    //% blockArg.shadow=minecraftBlock
    //% blockArg.defl=Block.DiamondBlock
    export function blockArgument(blockArg: number) {

    }

    //% blockId=my_extension_name_item_argument
    //% block="item argument $item"
    //% item.shadow=minecraftItem
    //% item.defl=Item.GoldIngot
    export function itemArgument(item: number) {

    }
}
```

Note that this example uses `number` for the argument type rather than the enum types (e.g. `Block`, `AnimalMob`, etc.)


### Position types

You can also define shadow blocks for the various position formats that exist within Minecraft. Unlike the number types, you cannot set a default value for these shadow blocks.

This example shows the correct shadow values for the various position types:

```ts
namespace custom {
    //% blockId=my_extension_name_relative_position_argument
    //% block="relative position argument $relPos"
    //% relPos.shadow=minecraftCreatePosition
    export function relativePositionArgument(relPos: Position) {

    }

    //% blockId=my_extension_name_world_position_argument
    //% block="world position argument $worldPos"
    //% worldPos.shadow=minecraftCreateWorldPosition
    export function worldPositionArgument(worldPos: Position) {

    }

    //% blockId=my_extension_name_camera_position_argument
    //% block="camera position argument $camPos"
    //% camPos.shadow=minecraftCreatePositionCamera
    export function cameraPositionArgument(camPos: Position) {

    }


    //% blockId=my_extension_name_local_position_argument
    //% block="local position argument $localPos"
    //% localPos.shadow=minecraftCreatePositionLocal
    export function localPositionArgument(localPos: Position) {

    }
}

```

## Common block shapes

### Statements

By default all blocks that do not return anything are statements. Statement blocks can be placed inside of event blocks.

### Reporters

Functions that return a value are automatically converted into reporter blocks. These blocks are either round or hexagonal and can be passed to other blocks as arguments.

When making a reporter block, it is best practice to always explicitly list the return type on the function that defines them.

### Events

Functions that take in another function as an argument are turned into event blocks. Event blocks are top-level blocks that statements can be placed inside. They are always top-level and cannot be placed inside other events.

Event blocks have the following restrictions:

1. They cannot return a value
2. They must take in a function as the last argument
3. They cannot have any optional arguments
4. They can only have one function argument

```ts
namespace custom {
    //% blockId=my_extension_name_simple_event
    //% block="event with a block argument $blockArg"
    //% blockArg.shadow=minecraftBlock
    export function simpleEvent(blockArg: number, handler: () => void) {

    }
}

```

#### Events with callback arguments

Sometimes it is useful to pass arguments to the user's code in an event block.

For example, if you were creating an event that runs user code whenever a block is placed, you may wish to pass the type of block to the user in a variable.

To add draggable callback arguments to your block, change the type of the function argument to include the parameters and reference them inside your block string just as you would any other argument. You will also need to add the annotation `draggableParameters=reporter`:

```ts

namespace custom {
    //% blockId=my_extension_name_event_with_callback_argument
    //% block="event with draggable callback param $block"
    //% draggableParameters=reporter
    export function eventWithCallbackArgument(handler: (block: number) => void) {

    }
}
```

#### Dockable events

You can make an event into a statement by adding the `handlerStatement` annotation.

```ts
namespace custom {
    //% blockId=my_extension_name_dockable_event
    //% block="dockable event with a block argument $blockArg"
    //% blockArg.shadow=minecraftBlock
    //% handlerParameter=1
    export function dockableEvent(blockArg: number, handler: () => void) {

    }
}
```