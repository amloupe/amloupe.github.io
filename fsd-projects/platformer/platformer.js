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
    createPlatform(600,403,100,5)
    createPlatform(890,480,150,300)
    createPlatform(900,115,120,200)
    createPlatform(1100,405,100,5)
    createPlatform(1300,295,50,5)
    createPlatform(1100,230,73,5)
    createPlatform(750,210,100,5)
    createBadPlatform(590,256,100,5,"gray")
    createBadPlatform(400,300,100,5,"gray")
    createBadPlatform(200,250,100,5,"gray")
    createPlatform(650,100,100,5)
    createPlatform(495,150,100,5)
    createPlatform(295,120,100,5)
    createPlatform(150,50, 100, 5, "gray", 5, 100, 0, 100, 250, 1)
    createPlatform(10,100,70,5)
    createPlatform(400, 300, 70, 5, "blue", 1200, 1300, 1, 100, 200, 1)



    // TODO 3 - Create Collectables
    createCollectable("database", 950, 385, 0.9, 0.9);
    createCollectable("database", 1300,200,0.5,0.5)
    createCollectable("database",950,0,0.5,0.5)
    createCollectable("database", 9,50,0.5,0.5)
    createCollectable("database",1300,20,0,0.5)


    
    // TODO 4 - Create Cannons
createCannon("right",750,5)
createCannon("top",300,790)
createCannon("right",460,2250)
createCannon("top",1195,2750)
createCannon("left",180,1900)

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
