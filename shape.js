class Shape {
   constructor(...c) { 
     this.c=c

}
}

class Rectangle extends Shape { 
    constructor(height, width) { 
       super()
       this.h = height; 
       this.w = width;
      console.log( this.n=height*width)
    } 
    
 } 
 class Circle extends Shape
 {

    constructor(rad) {
       super()
    this.rad=3.14*rad*rad;
    console.log(this.rad)
 }
 
}

var RecObj = new Rectangle(10,20); 
   
var CirObj = new Circle(5) ;
  

  



  

