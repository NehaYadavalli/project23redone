class RedSide{

  constructor(x,y){
  
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,20,100,options);
      World.add(world,this.body);
  
      
  
      this.width = 20;
      this.height = 100;
  }
      display(){
          var pos = this.body.position;
  
          fill ("red");
  
          rectMode(CENTER);
          rect(pos.x,pos.y,20,100);
  
  
      }
  }