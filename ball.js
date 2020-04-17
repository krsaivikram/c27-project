class Ball  {
  constructor(x,y){
    var options = {
      'restitution':0,
      'friction':0.3,
     'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = 50;
        this.height = 50;
        this.image = loadImage("sprites/ball.png");
        World.add(world, this.body);
    
  }

  display() {
    push();
    translate(this.body.position.x,this.body.position.y);
    imageMode(CENTER);
   this.body.scale = 0.2;
    image(this.image,0,0,this.width,this.height);
    pop();
  }
}
