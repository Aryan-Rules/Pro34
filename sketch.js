var brush;
var database;
var ion;
var array=[];
function setup() {
  createCanvas(500,500);
  database=firebase.database();
  brush = createSprite(250,250,10,10);
  brush.shapeColor="red";
  var ballreff=database.ref('brush/position')
  ballreff.on("value",readposition);
}

function draw() {  
  if (mousePressedOver(brush)){
     brush.x=mouseX
     brush.y=mouseY
  }
  database.ref('brush/position').set({
    position:array
})
  drawSprites();
}

function readposition(lon){
 ion=lon.val();
 brush.x=ion.x
 brush.y=ion.y
}

function changePosition(x,y){

  brush.x = brush.x + x;
  brush.y = brush.y + y;
}

function mouseDragged(){
   var point={
     x:mouseX,
     y:mouseY
   }
   array.push(point);
console.log(array)
}






