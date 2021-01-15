var canvas,surface1,surface2,surface3,surface4,box;
var music,edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    
    //create 4 different surfaces
    surface1=createSprite(20,599,120,40);
    surface1.shapeColor="blue";
    surface2=createSprite(170,599,140,40);
    surface2.shapeColor="darkorange";
    surface3=createSprite(399,599,135,40);
    surface3.shapeColor="red";
    surface4=createSprite(670,599,160,40);
    surface4.shapeColor="green";
    


    //create box sprite and give velocity
    box=createSprite(26,24,30,30);
    box.shapeColor="white";
    box.velocityX=3;
    box.velocityY=4;
    edges=createEdgeSprites();
    box.bounceOff(edges);

}

function draw() {
    background(rgb(169,169,169));           
    //create edgeSprite
    createEdgeSprites();
    box.bounceOff(edges);

    if(surface1.isTouching(box)&&box.bounceOff(surface1)){
        box.shapeColor="blue";
        playSound("music.mp3");
    }

    if(surface2.isTouching(box)&&box.bounceOff(surface2)){
        box.shapeColor=("white");
        box.velocityX=0;
        box.velocityY=0;
        music.stop();
        

        
    }
    
    if(surface3.isTouching(box)&&box.bounceOff(surface3)){
        box.shapeColor="red";
        
    }

    if(surface4.isTouching(box)&&box.bounceOff(surface4)){
        box.shapeColor="green";
    }
    
    //add condition to check if box touching surface and make it box
    drawSprites();
}
