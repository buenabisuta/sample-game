kaboom()

function spawn() {
  add([
    rect(40, rand(30, 80)),
    pos(width(), height() - 40),
    color(255, 150, 100),
    move(LEFT, 400),
    origin("botleft"),
    area(),
    cleanup(),
    "box"
  ]);

  wait(rand(0.6, 1.5), spawn);
}

scene("game", () => {
  add([
    rect(25, 25),
    pos(80, 160),
    color(50, 50, 255),
    outline(2),
    area(),
    body({
      jumpForce: 800,
      weight: 2,
    }),
    "player"
  ]);
  
  add([
    rect(width(), 40),
    pos(0, height() - 40),
    color(150, 100, 50),
    area(),
    solid(),
  ]);
  
  add([
    text(0),
    pos(24, 24),
    "score",
    { count: 0 }
  ]);
    
  onUpdate("player", p => {
    if (p.grounded() && isKeyPressed("space")) p.jump();
  })

  onCollide("player", "box", (p,b) => {
    addKaboom(p.pos);
    go("gameover", get("score")[0].count)
  })

  onUpdate("score", s => {
    s.text = s.count++;
  })
  spawn();
})

scene("gameover", score => {
  add([
    text("Game Over\n" + score),
    pos(center()),
    origin("center"),
  ])

  onMousePress(() => {
    go("game");
  })
})


go("game");
