class Ball{
    constructor(x, y, size){
      this.x = x
      this.y = y
      this.size = size
      this.color = createRandomColor()
      this.speed = Math.random() * 4
    }

    checkLines(rightLine,leftLine){
        console.log(rightLine, leftLine)
        if(this.x < leftLine.x1){
            return -1
        }else if(this.x > rightLine.x1){
            return -1
        } else {
            return 1
        }
    }
    
   render(){
     console.log(this.x, this.y, this.size)
     fill(this.color)
     circle(this.x, this.y, this.size)
   } 

   update(rightLine, leftLine){
       this.speed *= this.checkLines(rightLine, leftLine)       
       this.x += this.speed

   }
  }
  