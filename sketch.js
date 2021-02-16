var cat, mouse, cImage, mImage, garden, gImage;
function preload() {
    //load the images here
    cImage = loadAnimation("images/cat1.png","images/cat2.png"," images/cat3.png");
    ctImage = loadImage("images/cat4.png");
    gImage = loadImage("images/garden.png");
    mImage = loadAnimation("images/mouse1.png", "images/mouse2.png");
    m1Image = loadImage("images/mouse4.png;")
}
 
function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    garden = createSprite(400, 400, 20, 20);
    garden.addImage(gImage);

    cat = createSprite(200, 200, 20, 20);
    cat.addAnimation(cImage);

    mouse = createSprite(300, 300, 20, 20);
    mouse.addImage(mImage);
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){
  //For moving and changing animation write code here
if (keyCode === LEFT_ARROW){
    cat.velocityX = -5
    cat.addAnimation(cImage)
}
if (cat.x-mouse.x<(cat.width-mouse.width)/2){
     cat.addAnimation(ctImage); mouse.addImage(m1Image);
     } 
     text (mouseX + ',' + mouseY, 10, 45); 

     drawSprites();
    }