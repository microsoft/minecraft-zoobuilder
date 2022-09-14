# Sample extension for pxt-minecraft

This repo provides a sample extension for the Microsoft MakeCode Minecraft Education Edition editor.

For helpful tips on defining blocks, see [creating blocks](./creating-blocks.md).

## Getting started

Microsoft MakeCode can only be used with Minecraft Education Edition. You can download Minecraft Education Edition here:

https://education.minecraft.net/en-us/get-started/download

Once installed, you can access the MakeCode editor by following these steps:

1. Log in using your Employee or Educational institution credentials
2. Create a new world. Leave all of the default options for the world as-is (or see the "world options" section below for some helpful tips)
3. Once the world has loaded, press "c" on your keyboard and select "MakeCode" from the list of options to open the editor


## Extension dev loop

The easiest way to develop an extension is to first write your code from within the MakeCode editor inside of Minecraft Education Edition. The extension development process looks something like this:

1. Write your code inside MakeCode Education Edition and test it.
2. Once your code is in a good state, navigate to https://minecraft.makecode.com/?github=1 in a browser
3. Create a new project and turn it into a GitHub repo by pressing the GitHub button in the bottom bar
4. Switch to the JavaScript editor and copy over your code from Minecraft Education Edition and define your blocks

You can use MakeCode playground (https://makecode.com/playground) to build shapes for your blocks. This tool provides easy to use samples to build the blocks. Choose Minecraft from the editor drop down to see your block generated. Link for the block definition guide: https://makecode.com/defining-blocks


## Helpful tips

### World Options

There are a few useful options you can check when creating a world:

1. Set the default game mode to "Creative". This will allow you to fly and prevent you from dying. You can change the game mode at any time by opening the chat and typing `/gamemode s` for survival or `/gamemode c` for creative
2. Make sure the difficulty is higher than peaceful. Peaceful will prevent any monster mobs from spawning.
3. If you are going to be collaborating with someone else inside this world, change the "Permission level for players who join your world" setting to "Operator" so that they can also run code
4. Under "World Options", toggle "Show Coordinates" to on

### Performance options

If you are running another performance intensive app (e.g. Microsoft Teams) at the same time as Minecraft, it can be useful to change your graphics settings to improve perf. To access the video settings:

1. While inside a world, press esc to open the pause menu
2. Click "Settings"
3. Click "Video" in the left-hand bar

The following settings can drastically improve performance:

1. Turn off "Fancy Leaves", "Beautiful Skies", "Smooth Lighting", and "Fancy Graphics"
2. Set the "Render Distance" to the minimum value
3. Set "Anti-Aliasing" to 1

Additionally, disconnecting any external monitors will also improve performance by quite a bit.

## Contributing

This project welcomes contributions and suggestions.  Most contributions require you to agree to a
Contributor License Agreement (CLA) declaring that you have the right to, and actually do, grant us
the rights to use your contribution. For details, visit https://cla.opensource.microsoft.com.

When you submit a pull request, a CLA bot will automatically determine whether you need to provide
a CLA and decorate the PR appropriately (e.g., status check, comment). Simply follow the instructions
provided by the bot. You will only need to do this once across all repos using our CLA.

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/).
For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or
contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.

## Trademarks

This project may contain trademarks or logos for projects, products, or services. Authorized use of Microsoft 
trademarks or logos is subject to and must follow 
[Microsoft's Trademark & Brand Guidelines](https://www.microsoft.com/en-us/legal/intellectualproperty/trademarks/usage/general).
Use of Microsoft trademarks or logos in modified versions of this project must not cause confusion or imply Microsoft sponsorship.
Any use of third-party trademarks or logos are subject to those third-party's policies.
