class Bob {
    constructor(x,y,radius){
var options ={
  density:0.8,
  friction:0
}
this.radius=radius
      this.body=Bodies.circle(x,y,radius,options)
      World.add(world,this.body)
    }
    display(){
      var pos=this.body.position
      fill("blue")
      ellipseMode(RADIUS)
      ellipse(pos.x,pos.y,this.radius*2,this.radius*2)
      
      
    }
  }
