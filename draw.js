const switchColor = (color) =>{
    if (color === "red")
    return "blue";
    else return "red";
    }
// Create new div
const buildSquares = () => {
    const target = document.querySelector(".row");
    for (let i = 0; i < 9; i++) {
      const square = document.createElement("DIV");
   
      flag ="red";
      // add class square
      square.classList.add("square");
      square.classList.add("col-4");
  
      //add listener
      square.addEventListener( 'mousedown',function(){
          this.style.backgroundColor = flag;
          flag= switchColor(flag);
      })
      target.appendChild(square);
    }
  };
  buildSquares();
  