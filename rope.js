class Rope{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            length:200,
            stiffness:0.1
        }
        this.pointB=this.pointB
       this.rope=Constraint.create(options)
       World.add(world,this.rope)
    }
    display(){
        var A= this.rope.bodyA.position
        var B= this.rope.pointB
        stroke("white")
        strokeWeight(3)
        line(A.x,A.y,B.x,B.y)
    }
}