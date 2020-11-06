//Create variables here
var dog;
 var happyDog; 
 var database; 
 var foodS = 0; 
 var foodStock; 
 function preload() {
    //load images here 
    dogImage = loadImage("dogImg.png"); 
    
    dogHappy = loadImage("dog.png"); 
  } 
  function setup() {
     database = firebase.database(); 
     createCanvas(500, 500); 
     dog = createSprite(250,400,30,30);
      dog.addImage(dogImage);
       dog.scale = 0.15; 
       foodStock = database.ref('Food'); 
       foodStock.on("value",readStock); 
      }
       function draw() { 
         background(46,139,87); 
         if(keyWentDown(UP_ARROW)){
            if(foodS !== 0){ 
              foodS = foodS - 1; 
            } 
            writeStock(foodS); 
            dog.addImage(dogHappy); 
          } 
          drawSprites(); //add styles here 
          textSize(20); 
          fill("black"); 
          stroke(4); 
          text("Food Stock left: " + foodS,300,100);
           text("Note: Press Up arrow key to feed drago Milk",10,50);
           } 
           function readStock(data){ 
             
    foodS = data.val(); 
  } function writeStock(x){ 
    database.ref('/').update({ 
      Food:x
     }) 
    }
    


