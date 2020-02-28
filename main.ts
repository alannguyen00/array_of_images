let count = 0
let list = [sprites.builtin.forestMonkey0, sprites.builtin.forestMonkey1, sprites.builtin.forestMonkey2, sprites.builtin.forestMonkey3, sprites.builtin.forestMonkey4, sprites.builtin.forestMonkey5, sprites.builtin.forestMonkey6, sprites.builtin.forestMonkey10]
let monkey = sprites.create(list[0], SpriteKind.Player)
game.onUpdateInterval(100, function () {
    monkey.setImage(list[count % list.length])
    count += 1
})
