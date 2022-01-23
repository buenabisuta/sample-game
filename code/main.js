kaboom()

scene("start", () => {
  add([
    text("START"),
    pos(10,10),
    area(),
    "menu"
  ])

  onClick("menu", () => {
    go("game");
  })
})

scene("game", () => {
  const player = add([
    rect(50,50),
    pos(150,100),
    move(RIGHT, 300),
    area(),
    cleanup(),
  ])
})

go("start");
