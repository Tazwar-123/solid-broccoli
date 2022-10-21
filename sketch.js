var player, npc, enemy;
var playerImg, npcImg, enemyImg;


function preload() {
  npcImg = loadImage('npc.png')
  enemyImg = loadImage('enemy.png')
}

function setup() {
  createCanvas(800,400);
  
}

function draw() {
  background(255,255,255);  
  drawSprites();
  player();
  npc();
  enemy();
}

function player() {
  player = createSprite(100, 100, 150, 150)
  player.shapeColor = 'red'
}

function npc () {
  npc = createSprite(200, 200, 100, 100)
  npc.addImage(npcImg);
}

function enemy() {
  enemy = createSprite(300, 300, 50, 50)
  enemy.addImage(enemyImg)
}