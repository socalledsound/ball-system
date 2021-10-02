class BallSystem{
    constructor(x, y, size){
        this.x= x
        this.y = y
        this.size = size 
        this.color = random(50,100)
        this.leftLine = new Line(
                                  this.x + this.size * 0.25,
                                  this.y,
                                  this.x + (this.size * 0.25),
                                  this.y + this.size
                                )
        this.rightLine = new Line(                            
                                  this.x + this.size * 0.75,
                                  this.y,
                                  this.x + (this.size * 0.75),
                                  this.y + this.size)
        this.numBalls = 3 
        this.spaceBetweenLines = (this.size* 0.75 - this.size * 0.35)
        this.balls = Array.from({ length: this.numBalls}, () => {
          return new Ball( this.x + this.size * 0.30 + this.spaceBetweenLines * Math.random(),this.size/15 + this.y + Math.random() * this.size, this.size/10)
        })
        
      
    }
    render(){
      fill(this.color)
      rect(this.x, this.y, this.size)
      this.rightLine.render()
      this.leftLine.render()
      this.balls.forEach(ball => ball.render())
    }

    update(){
        
        this.balls.forEach(ball => ball.update(this.rightLine, this.leftLine))
        
    }
  }