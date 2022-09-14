/**
 * Use weights to control the order of blocks, a higher
 * weight means higher in the toolbox
 */

//% color="#AA278D" 
namespace zoo {
    //% block="build acqurium of size $size"
    //% size.defl=6
    //% size.min=6 size.max=100
    export function aquarium(size: number) {
        blocks.fill(
            GLASS,
            posCamera(-size / 2, 0, 5),
            posCamera(size / 2, size, 5 + size),
            FillOperation.Replace
        )
        blocks.fill(
            WATER,
            posCamera(-size / 2 + 1, 1, 6),
            posCamera(size / 2 - 1, size - 1, 4 + size),
            FillOperation.Replace
        )
    }
    //% block="build fence of width $width and height $height"
    //% width.defl=6
    //% width.min=6 width.max=100
    //% height.defl=2
    //% height.min=2 height.max=20
    export function fence(width: number, height: number) {
        builder.teleportTo(player.position())
        builder.move(BACK, width / 2)
        builder.move(RIGHT, width / 2)
        builder.mark()
        for (let index = 0; index < 4; index++) {
            builder.move(FORWARD, width)
            builder.turn(LEFT_TURN)
        }
        builder.raiseWall(OAK_FENCE, height)
    }
}