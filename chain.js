class rope
{
    constructor(body1,body2,offsetX,offsetY)
    {
        this.offsetX=offsetX;
        this.offsetY=offsetY;
        var options={
            bodyA:body1,
            bodyB:body2,
            pointB:{x:this.offsetX,y:this.offsetY}
            
        }
        this.chain=Constraint.create(options)
        World.add(world,this.chain);
    }
    display(){
        var pointA=this.chain.bodyA.position
        var pointB=this.chain.bodyB.position
        var anchor1=pointB.x+this.offsetX  
        var anchor2=pointB.y+this.offsetY      
        line (pointA.x,pointA.y,anchor1,anchor2);
    }
    }