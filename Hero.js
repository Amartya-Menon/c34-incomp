class Hero{

        constructor(x,y,r)
        {
         var options ={
         density : 1,
         frictionAir : 1
        }; 

          this.x=x 
          this.y=y
          this.r=r
          this.image = loadImage("sprites/FOLDERTY.jpg");
          this.image.scale=0.5
          this.body = Bodies.circle(this.x,this.y,(this.r)/2, options);
          World.add(world, this.body);
         
        } 
        
        
        display(){
         push()
         translate(this.body.position.x,this.body.position.y)
          imageMode(CENTER) 
          image(this.image,2,3)
          pop()
         
        }

      
      }