info.onCountdownEnd(function () {
    game.over(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy(effects.spray, 100)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
})
let projectile2: Sprite = null
let projectile: Sprite = null
scene.setBackgroundImage(assets.image`Freeway`)
let mySprite = sprites.create(assets.image`Mama`, SpriteKind.Player)
mySprite.setStayInScreen(true)
controller.moveSprite(mySprite, 0, 100)
scroller.scrollBackgroundWithSpeed(-50, 0)
info.startCountdown(15)
animation.runImageAnimation(
mySprite,
assets.animation`Mama Moving`,
200,
true
)
forever(function () {
    projectile = sprites.createProjectileFromSide(assets.image`Baby`, -50, 0)
    projectile.y = randint(15, 115)
    projectile2 = sprites.createProjectileFromSide(assets.image`Tourist`, -90, 0)
    projectile2.y = randint(15, 115)
    projectile2.setKind(SpriteKind.Enemy)
    animation.runImageAnimation(
    projectile,
    assets.animation`Animated Baby`,
    100,
    true
    )
    animation.runImageAnimation(
    projectile2,
    assets.animation`Animated Tourist`,
    100,
    true
    )
    pause(1000)
})
