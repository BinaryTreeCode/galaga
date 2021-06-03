spacePlane = sprites.create(img("""
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
"""))
spacePlane.set_stay_in_screen(True)
info.set_life(3)
controller.move_sprite(spacePlane, 200, 200)
spacePlane
def on_a_pressed():
    dart = sprites.create_projectile_from_sprite(img("""
        . . . . . . . . . . . . . . . .
        . . . . . . 8 f 4 1 2 . . . . .
        . . . . 1 1 1 1 1 1 1 8 1 . . .
        . . . . . . f 4 8 1 2 . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    """), spacePlane, 
    200,
     0)
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)
def on_update_interval():
    bogey = sprites.create(img("""
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
 """),SpriteKind.enemy)
    bogey.set_velocity(-100, 0)
    bogey.left = scene.screen_width()
    bogey.y = randint(0, scene.screen_height())
    bogey.set_flag(SpriteFlag.AUTO_DESTROY, True)
game.on_update_interval(500, on_update_interval)
def on_on_overlap(sprite, otherSprite):
    otherSprite.destroy()
    info.change_life_by(-1)       
sprites.on_overlap(SpriteKind.player, SpriteKind.enemy, on_on_overlap)

