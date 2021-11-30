const player1 = {
    sticker :"X",
    name:"Habsa",
    score:0
}
const player2 = {
    sticker :"O",
    name:"Amadou",
    score : 0
}
// set board
let board = ["", "", "", "", "", "", "", "", ""];

// Objects from front page
let btn1 = document.querySelector(".btn1").innerHTML;
let btn2 = document.querySelector(".btn2").innerHTML;
let btn3 = document.querySelector(".btn3").innerHTML;
let btn4 = document.querySelector(".btn4").innerHTML;
let btn5 = document.querySelector(".btn5").innerHTML;
let btn6 = document.querySelector(".btn6").innerHTML;
let btn7 = document.querySelector(".btn7").innerHTML;
let btn8 = document.querySelector(".btn8").innerHTML;
let btn9 = document.querySelector(".btn9").innerHTML;

// Set active player
let activePlayer = player1;

// Next Player
function nextPlayer(){
    if (activePlayer == player1){
        return activePlayer = player2;
    }
    else{
        return activePlayer = player1;
    }
  
}

function play(){
    for (let i=0; i< 9;i++){
        //     -- print activeplayer turn
        document.querySelector(".turn").innerHTML = `${activePlayer.sticker} turn.`;
            //     -- get the grid clicked from front page
        document.querySelector(`.btn${i+1}`)
            //        --- lock the grid
    //     -- save it to board

        .addEventListener('click', (event) =>{    
            let btn = document.querySelector(`.btn${i+1}`);
            let content = btn.innerHTML;
           
            console.log(board);
            event.preventDefault();
                if (content !== "O" || content !== "X")  {
                  content= activePlayer.sticker;
                  board[i] = activePlayer.sticker; 
                //   btn.disabled = true;
               
                  nextPlayer();
                }         
                
                 
                

        });
    
}


    //        --- lock the grid
    //     -- save it to board
    //     -- print x to front page
    //     --check for win
    //        if activeplayer wins then
    //          set player1.score to score + 1
    //          print active is the winner front page
    //          exit the game
    //     next player
    // set  draw
    
    //     -- print activeplayer turn
    //     -- get the grid clicked from front page
    //        --- lock the grid
    //     -- save it to board
    //     -- print x to front page
    //     --check for win
    //        if activeplayer wins then
    //          set player1.score to score + 1
    //          print active is the winner front page
    //          exit the game
    //     next player
    // set  draw
}

play();

// // reset game
// set points to zero(x and o)

// // restart game
// clean board
// clean front page
