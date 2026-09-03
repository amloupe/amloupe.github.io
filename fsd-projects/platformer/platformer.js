$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms
    //createPlatform(x, y, width, height, "color")
    createPlatform(125,605,100,5)
    createPlatform(400,510,100,5)
    createPlatform(600,400,100,5)
    createPlatform(890,450,130,300)
    createPlatform(900,100,120,200)
    createPlatform(1100,400,100,5)
    createPlatform(1300,295,50,5)
    createPlatform(1100,200,73,5)
    createPlatform(750,200,100,5)
    createBadPlatform(600,258,100,5,"gray")
    createBadPlatform(400,300,100,5,"gray")
    createBadPlatform(200,250,100,5,"gray")
    createPlatform(650,100,100,5)
    createPlatform(495,150,100,5)
    createPlatform(295,120,100,5)
    createPlatform(150,50, 100, 5, "gray", 5, 100, 0, 100, 250, 1)
    createPlatform(10,100,70,5)



    // TODO 3 - Create Collectables
    createCollectable("database", 950, 385, 0.9, 0.9);
    createCollectable("database", 1300,200,0.5,0.5)
    createCollectable("database",950,0,0.5,0.5)
    createCollectable("database", 9,50,0.5,0.5)


    
    // TODO 4 - Create Cannons
createCannon("right",750,5)
createCannon("top",300,725)
createCannon("right",450,2000)

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
