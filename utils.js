const createRandomColor = () => `#${Math.floor(Math.random() * 2 ** 24).toString(16)}`

const makeBallSystems = 
    (rows, columns, width, height, canvasWidth, canvasSize) => {
        let arr = []
        for(let i = 0; i < rows; i++){
            for( let j = 0; j< columns; j++){
                arr.push( new BallSystem(
                    j * canvasWidth/(canvasWidth/width),
                    i * canvasHeight/(canvasHeight/height),
                    width, height
                ))
            }
        }
        return arr
    }

        // the easiest thing to do here is probably make the array by hand
    // because to make it programmatically requires knowing nested
    // for loops.  so, something like
    // section1 = new Section(0, 0, sectionSize)
    // section2 = new Section(canvasWidth/2, 0, sectionSize)
    // section3 = new Section(0, canvasHeight/2, sectionSize)
    // section4 = new Section(canvasWidth/2, canvasHeight/2, sectionSize)
    //  sections = [section1, section2, section3, section4] 