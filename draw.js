// const switchColor = (color) =>{
//     if (color === "red")
//     return "blue";
//     else return "red";
//     }
// // Create new div
// const buildSquares = () => {
//     const target = document.querySelector(".row");
//     for (let i = 0; i < 9; i++) {
//       const square = document.createElement("DIV");
   
//       flag ="red";
//       // add class square
//       square.classList.add("square");
//       square.classList.add("col-4");
  
//       //add listener
//       square.addEventListener( 'mousedown',function(){
//           this.style.backgroundColor = flag;
//           flag= switchColor(flag);
//       })
//       target.appendChild(square);
//     }
//   };
//   buildSquares();
// Getting my buttons
class Player{
    constructor(name,sticker){
        this.name = name;
        this.sticker = sticker;
    }
}

players = [];
player1 = new Player("Muntaga","X");
player2 = new Player("Habsa","O");
players.push(player1);
players.push(player2);

let board = ["", "", "", "", "", "", "", "", ""];
let activePlayer = players[0];


//insert select 
//board[0] = activePlayer.sticker;

const nextPlayer = ()=>{
    if(activePlayer == players[0]){
        return activePlayer = players[1];
    }
    else{
    return activePlayer = players[0];
    }
  }

  // Get board value
let btn1 = document.querySelector("#btn1").value;
let btn2 = document.querySelector("#btn2").value;
let btn3 = document.querySelector("#btn3").value;
let btn4 = document.querySelector("#btn4").value;
let btn5 = document.querySelector("#btn5").value;
let btn6 = document.querySelector("#btn6").value;
let btn7 = document.querySelector("#btn7").value;
let btn8 = document.querySelector("#btn8").value;
let btn9 = document.querySelector("#btn9").value;

let btnReset = document.querySelector("#reset");


  const reset = () => {
    location.reload();
    btn1="";
    btn2="";
    btn3="";
    btn4="";
    btn5="";
    btn6="";
    btn7="";
    btn8="";
    btn9="";
    board = ["", "", "", "", "", "", "", "", ""];
 }

const winnings = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const spot = () => {
    let i=0;
    while (i<9){
        if(board[i] ===""){
           return false;
       }i++;
    }
    if(i>=9){
        return true;
    }
}

const play = () => {
    for (let i = 0; i< 9; i++){
         document.querySelector("#btn"+(i+1)).addEventListener('click', function(){
             // save btn selected to board
             board[i] = activePlayer.sticker;
             document.querySelector("#btn"+(i+1)).value = activePlayer.sticker;
             document.querySelector("#btn"+(i+1)).style.backgroundColor = "violet";
             document.querySelector("#btn"+(i+1)).disabled = true;

             //Horizontal                                                                   
             if(board[0] == board[1] && board[1] == board[2] && board[2] == activePlayer.sticker || 
                board[3] == board[4] && board[4] == board[5] && board[5] == activePlayer.sticker || 
                board[6] == board[7] && board[7] == board[8] && board[8] == activePlayer.sticker){
                    alert(`${activePlayer.name} is the winner`);
                   // break;
                    reset();
             }
             //Vertical
             else if(board[1] == board[4] && board[4] == board[7] && board[7] == activePlayer.sticker || 
                     board[2] == board[5] && board[5] == board[8] && board[8] == activePlayer.sticker || 
                     board[3] == board[6] && board[6] == board[9] && board[9] == activePlayer.sticker){
                    alert(`${activePlayer.name} is the winner`);
                    reset();
             }
             //Diagonal
             else   if(board[1] == board[5] && board[5] == board[9] && board[9] == activePlayer.sticker || 
                board[3] == board[5] && board[5] == board[7] && board[7]== activePlayer.sticker ){
                    alert(`${activePlayer.name} is the winner`);
                    reset();
                  
             }else if(spot()){
                 alert("tie");
                 reset(); 
                 
             }
             nextPlayer();
         });
     }     
}
play();

btnReset.addEventListener("click", function(){
    reset();
}

);