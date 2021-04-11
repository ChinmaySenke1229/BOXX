var canvas;
var music;
var mainRect,rec1,rec2,rec3,rec4;

function preload(){
    
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(1000,600);

    mainRect=createSprite(random(20,750),200);
    mainRect.width =40;
    mainRect.height=40;
    mainRect.velocityX=4;
    mainRect.velocityY=7;

    mainRect.shapeColor="white";
    rec1=createSprite(50,500,200,20);
    rec1.shapeColor="green";

    rec2=createSprite(300,500,200,20);
    rec2.shapeColor="red";

    rec3=createSprite(550,500,200,20);
    rec3.shapeColor="blue";

    rec4=createSprite(800,500,200,20);
    rec4.shapeColor="yellow";

    music.play();

    //create 4 different surfaces



    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    mainRect.bounceOff(edges);
    if(mainRect.isTouching(rec1)){
        mainRect.shapeColor="pink";
        mainRect.bounceOff(rec1);
        music.play();
    }
    if(mainRect.isTouching(rec2)){
        mainRect.shapeColor="cyan";
        mainRect.velocityX=0;
        mainRect.velocityY=0;
        music.stop();
    }
    if(mainRect.isTouching(rec3)){
        mainRect.shapeColor="orange";
        mainRect.bounceOff(rec3);
        music.play();
    }
    if(mainRect.isTouching(rec4)){
        mainRect.shapeColor="brown";
        mainRect.bounceOff(rec4);
        music.play();
    }

    drawSprites();


    //add condition to check if box touching surface and make it box
}
