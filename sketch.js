var garden,rabbit;

var spawnApples, spawnLeaves

var appleImg, leafImg

var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("leaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  rabbit.x = World.mouseX

  spawnApples();
  spawnLeaves();
  drawSprites();
}

function spawnApples(){
    if(frameCount %80===0){
      var apples = createSprite(0,10,30,50);
      apples.x = Math.round(random(10,400));
      apples.addImage(appleImg);
      apples.scale=0.1
      apples.velocityY = 6
      apples.lifetime = 75

    }
  }

  function spawnLeaves(){
    if(frameCount %80===0){
      var leaf = createSprite(0,10,30,50);
      leaf.x = Math.round(random(10,400));
      leaf.addImage(leafImg);
      leaf.scale=0.1
      leaf.velocityY = 6
      leaf.lifetime = 75

    }
  }