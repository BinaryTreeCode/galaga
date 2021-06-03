controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    dart = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 8 f 4 1 2 . . . . . 
        . . . . 1 1 1 1 1 1 1 8 1 . . . 
        . . . . . . f 4 8 1 2 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, spacePlane, 200, 0)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    scene.cameraShake(4, 500)
    info.changeLifeBy(-1)
})
let bogey: Sprite = null
let dart: Sprite = null
let spacePlane: Sprite = null
spacePlane = sprites.create(img`
    . . . . 8 2 . . . . . . . . . . . . . . . . . 
    . . . . 1 1 1 . . . . . 9 9 9 9 . . . . . . . 
    . . . . 2 2 2 2 . . . 9 9 9 9 9 9 . . . . . . 
    . 4 4 4 f 8 6 6 6 6 6 6 9 9 9 9 6 6 6 . . . . 
    4 4 4 f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . 
    . 4 4 f 6 8 8 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    . . 4 4 f 8 8 . . . . . 8 8 8 6 6 6 6 6 6 6 . 
    . . . . . . . . . . . 8 8 8 8 8 2 . . . . . . 
    . . . . . . . . . . . 8 8 8 8 2 . . . . . . . 
    . . . . . . . . . . 8 8 8 8 2 . . . . . . . . 
    `, SpriteKind.Player)
spacePlane.setStayInScreen(true)
info.setLife(3)
controller.moveSprite(spacePlane, 200, 200)
spacePlane
game.onUpdateInterval(500, function () {
    bogey = sprites.create(img`
        . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . 8 8 8 8 4 . 
        . . . . . . . . . . 8 8 8 8 . . . . 
        . . . . . . . 8 8 8 8 8 . . . . . . 
        . . . 8 2 . 8 8 1 8 8 8 8 . . . . . 
        . . . . . . . 8 8 8 8 8 . . . . . . 
        . . . . . . . . . . 8 8 8 8 . . . . 
        . . . . . . . . . . . . 8 8 8 8 4 . 
        . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    bogey.setVelocity(-100, 0)
    bogey.left = scene.screenWidth()
    bogey.y = randint(0, scene.screenHeight())
    bogey.setFlag(SpriteFlag.AutoDestroy, true)
})
