const Engine = Matter.Engine,
World = Matter.World,
Bodies = Matter.Bodies;

    var engine,world;
    var plinkos = [];
    var divisions = [];
    var particles = [];
    var divisionsHeight = 150;

function preload() {
    backgroundImg = loadImage("ik.png");
}

function setup() {
    var canvas = createCanvas(500, 800);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(599,790,1200,30);

    for(var j = 40; j<= width; j = j+50){
      plinkos.push(new Plinko(j , 75))
    }


    for(var j = 15; j<= width-10; j = j+50){
      plinkos.push(new Plinko2(j ,125))
    }


    for(var j = 40; j<= width-10; j = j+50){
      plinkos.push(new Plinko3(j ,175))
    }


    for(var j = 15; j<= width-10; j = j+50){
      plinkos.push(new Plinko4(j ,225))
    }


    for(var j = 40; j<= width-10; j = j+50){
      plinkos.push(new Plinko5(j ,275))
    }


    for(var j = 15; j<= width-10; j = j+50){
      plinkos.push(new Plinko6(j ,325))
    }


    for(var j = 40; j<= width-10; j = j+50){
      plinkos.push(new Plinko7(j ,375))
    }


    for(var j = 15; j<= width-10; j = j+50){
      plinkos.push(new Plinko8(j ,425))
    }


    for(var k = 0; k <=width; k = k+60){
      divisions.push(new Divisions(k, height-divisionsHeight/2, 10, divisionsHeight));
    }

  }
 
function draw() { 
  if(frameCount % 60 === 0){
    particle = new Particle(random(120, 500), 0, 7, random(0, 360));
    particles.push(particle);
  }

  background(backgroundImg);
   Engine.update(engine);

for(var i = 0; i < particles.length; i++){
  particles[i].display();
 }

  for(var k = 0; k<divisions.length;k++){
  strokeWeight(5);
  stroke("black");
  divisions[k].display();
}
   for(var j = 0; j<plinkos.length;j++){
    plinkos[j].display();
 }
  stroke("black");
  ground.display();   

 console.log(plinkos.length);

  
}
 