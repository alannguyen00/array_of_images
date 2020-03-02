let count = 0
let monkey_pics: Sprite = null
let list = [sprites.builtin.forestMonkey0, sprites.builtin.forestMonkey1, sprites.builtin.forestMonkey2, sprites.builtin.forestMonkey3, sprites.builtin.forestMonkey4, sprites.builtin.forestMonkey5, sprites.builtin.forestMonkey6, sprites.builtin.forestMonkey10, sprites.builtin.forestMonkey10]
let duck = sprites.create(list[0], SpriteKind.Player)
game.onUpdateInterval(100, function () {
    monkey_pics = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
    monkey_pics.setImage(list[count % list.length])
    count += 1
})
