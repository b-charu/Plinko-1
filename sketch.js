const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var myEngine,myWorld;
var ground;
var plinko = [];
var balls = [];
var division = [];
var divht = 300;
//var ball;

function setup()
{
    createCanvas(800,800);

    myEngine = Engine.create();
    myWorld = myEngine.world;
    //create the ground
    ground = new Ground(width/2,height,width-20,20);

    //creating the divisions
    for(var i=5;i<=width;i=i+60)
    {
        division.push(new Division(i,height-divht/2,10,divht));
    }

    //creating plinkos
    for(var i= 50;i<=width-20;i=i+50)
    {
        plinko.push(new Plinko(i,50));
    }
    for(var i= 20;i<=width-20;i=i+50)
    {
        plinko.push(new Plinko(i,100));
    }
    for(var i= 50;i<=width-20;i=i+50)
    {
        plinko.push(new Plinko(i,150));
    }
    for(var i= 20;i<=width-20;i=i+50)
    {
        plinko.push(new Plinko(i,200));
    }
    for(var i= 50;i<=width-20;i=i+50)
    {
        plinko.push(new Plinko(i,250));
    }
    for(var i= 20;i<=width-20;i=i+50)
    {
        plinko.push(new Plinko(i,300));
    }
    for(var i= 50;i<=width-20;i=i+50)
    {
        plinko.push(new Plinko(i,350));
    }
    for(var i= 20;i<=width-20;i=i+50)
    {
        plinko.push(new Plinko(i,400));
    }
}
function draw()
{
    background(0);
    Engine.update(myEngine);

    ground.display();

    //creating the balls
   if(frameCount % 30 === 0)
    {
        balls.push(new Ball(random(150,700),10,10));
        //console.log(balls.length);
        //balls.push(new Ball(random(width/2-30,width/2+30),10,10));
        
    }
     
    for(var i = 0; i < balls.length; i++)
    {
        balls[i].display();
    }

    for(var i=0; i<division.length;i++)
    {
        division[i].display();
    }

    for(var i=0; i<plinko.length;i++)
    {
        plinko[i].display();
    }


}