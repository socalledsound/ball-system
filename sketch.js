 // ok I did a bunch for you!  now make the balls move


  

  
  
  
  
  const canvasWidth = 1000
  const canvasHeight = 800
  const numRows = 4
  const numColumns = 5
  const systemWidth = canvasWidth/numColumns
  const systemHeight = canvasHeight/numRows
  //let section1, section2, section3, section4
  let ballSystems
  
  
  function setup() {
    createCanvas(canvasWidth, canvasHeight);
    
    ballSystems = makeBallSystems(
                        numRows, 
                        numColumns, 
                        systemWidth,
                        systemHeight,
                        canvasWidth, 
                        canvasHeight)
        console.log(ballSystems)
  }
  
  function draw() {
    background(220);
    
    ballSystems.forEach(section => {
        section.update()
        section.render()
    })
  }