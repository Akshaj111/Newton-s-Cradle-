class Bob{
    
        constructor(x,y,w,h,offsetX,offsetY){
            var options={
                isStatic:true			
                }
            this.x=x;
            this.y=y;
            this.w=w;
            this.h=h;
            this.offsetX = offsetX;
            this.offsetX = offsetY;
            this.body=Bodies.rectangle(x, y, w, h , options);
             World.add(world, this.body);
    
        }
        display()
        {
                
                var groundPos=this.body.position;		
    
                push()
                translate(groundPos.x, groundPos.y);
                rectMode(CENTER)
                //strokeWeight(4);
                fill(128,128,128)
                rect(0,0,this.w, this.h);
                pop()
                
        }






};