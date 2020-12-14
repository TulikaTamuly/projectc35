//Create variables here
var dog
var foodS=20
var count,Time
var dateTime,timeEngine
var milk=[]
function preload()
{
  //load images here
  DogImage=loadImage("dogImg.png")
  DogHappyImage=loadImage("dogImg1.png")
}

function setup() {
  database=firebase.database()
  
	createCanvas(600, 700);
  dog=createSprite(300,600)
  dog.addImage(DogImage)
  dog.scale=0.2
  foodStock=database.ref('Food')
  foodStock.on("value",readStock)

  timeCount=database.ref('Time')
  timeCount.on("value",readTime)

  var button1=createButton("Feed Tommy")
  button1.position(300,60)
  button1.mousePressed(options)
  

  var button2=createButton("Refill stock")
  button2.position(450,60)
  button2.mousePressed(fillStock)
  
  for(var i=1;i<21;i++){
    milk[i]=new milkBottle()
  }
  milkFeeding=new milkBottle()
}


function draw() {  
  console.log(mouseX,mouseY)
  background("yellowgreen")
  time()
 //if(keyWentDown(UP_ARROW)){
   
   
 //   writeStock(foodS)
    
 // }
 // if(keyWentDown(DOWN_ARROW)){
 //   writestock(foodS)
 // }
  
  fill("darkgreen")
  textSize(19)
  
  text("Food:"+foodS,140,65)
  if(timeEngine>12){
    text("Last fed:"+Time+"PM",140,85) 
  }else{
  text("Last fed:"+Time+"AM",140,85)
}


if(frameCount-count>500){
  dog.addImage(DogImage)

}else if(frameCount-count<500){
  milkFeeding.display(175,600)
}

if(foodS>0){
milk[1].display(50,250)}
if(foodS>1){
milk[2].display(75,250)}
if(foodS>2){
milk[3].display(100,250)}
if(foodS>3){
milk[4].display(125,250)}
if(foodS>4){
milk[5].display(150,250)}
if(foodS>5){
milk[6].display(175,250)}
if(foodS>6){
milk[7].display(200,250)}
if(foodS>7){
milk[8].display(225,250)}
if(foodS>8){
milk[9].display(250,250)}
if(foodS>9){
milk[10].display(275,250)}
if(foodS>10){
milk[11].display(300,250)}
if(foodS>11){
milk[12].display(325,250)}
if(foodS>12){
milk[13].display(350,250)}
if(foodS>13){
milk[14].display(375,250)}
if(foodS>14){
milk[15].display(425-25,250)}
if(foodS>15){
milk[16].display(450-25,250)}
if(foodS>16){
milk[17].display(475-25,250)}
if(foodS>17){
milk[18].display(500-25,250)}
if(foodS>18){
milk[19].display(525-25,250)}
if(foodS>19){
milk[20].display(550-25,250)}


































  drawSprites();
  //add styles here
  
}
function readStock(data){
  foodS=data.val()
 
}
function showError(){
  console.log("error in writing the database")
}
function feedDog(){

  if(foodS<=0){
    foodS=0
  }else{
    foodS=foodS-1
  }
  count=frameCount
  dog.addImage(DogHappyImage)
  
  database.ref('/').update(
    {Food:foodS}
  )
}

function fillStock(){

  if(foodS<20){
    foodS=foodS+1
  }
  
  database.ref('/').update(
    {Food:foodS}
  )
}

async function time(){
    var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    var responseJSON=await response.json()
    dateTime=responseJSON.datetime
    timeEngine=dateTime.slice(11,13)
  
    
    

}
function readTime(data){
Time=data.val()
}
function setTime(){
  
  Time=dateTime.slice(11,16)
  database.ref('/').update(
    {Time:Time}
  )
 

}

function options(){
  setTime()
  feedDog()
}


















