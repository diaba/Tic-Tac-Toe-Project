class Player{
    constructor(name,sticker){
        this.name = name;
        this.sticker = sticker;
        this.score = 0;
    }
}
let players = [];
let player1 = new Player("Muntaga","X");
let player2 = new Player("Habsa","O");
players.push(player1);
players.push(player2);

const localData = JSON.parse(window.localStorage.getItem("data"));

players[0].score = parseInt(localData.X) | 0;
players[1].score = parseInt(localData.X) | 0;
tie = parseInt(localData.Tie) | 0;


let board = ["", "", "", "", "", "", "", "", ""];


// Get all element from front-end 
const txtScoreX = document.querySelector(".tockenX");
const txtScoreO = document.querySelector(".tockenO");
const txtScoreT = document.querySelector(".tockenT");
const btns = document.querySelectorAll(".grid");
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const btn4 = document.querySelector(".btn4");
const btn5 = document.querySelector(".btn5");
const btn6 = document.querySelector(".btn6");
const btn7 = document.querySelector(".btn7");
const btn8 = document.querySelector(".btn8");
const btn9 = document.querySelector(".btn9");
const btnReset = document.querySelector(".reset");
const btnRestart = document.querySelector(".restart");
const btnPlay = document.querySelector(".start");
const message = document.querySelector("body");
const display = document.querySelector(".message");
const sound = document.querySelector("#sound");
const soundT = document.querySelector("#Stie");
const soundW = document.querySelector("#Swin");

let activePlayer = players[0];
let gamePlaying = true;
let turn = txtScoreX;


const reset = () => {
   
    activePlayer = players[0];
    gamePlaying = true;
    turn.className = "active";
    btns.forEach(e =>{
        e.textContent = "";
    })
      for(let i= 0; i< 9; i++){ 
        board[i]="";
    }
 }

const nextPlayer = ()=>{
    gamePlaying = true;
    if(activePlayer == players[0]){
        turn.classList.remove("active");
        turn = txtScoreX;
        turn.classList.add("active");
        activePlayer = players[1];
    }
    else{
        turn.classList.remove("active");
        turn = txtScoreO;
        activePlayer = players[0];
        turn.classList.add("active");
    }
  }
//   update score 
const updateScore =() =>{
    const data = {
        "X":`${player1.score}`,
        "O":`${player2.score}`,
        "Tie":`${tie}`,
    }
    localStorage.setItem('data', JSON.stringify(data));
    turn.className += "active";
    txtScoreO.innerHTML = `O : ${players[1].score}`;
    txtScoreX.innerHTML = `X : ${players[0].score}`;
    txtScoreT.innerHTML = `Tie : ${tie}`;
} 
updateScore();
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
const stopGame = ()=>{
    gamePlaying = false;
    for (let i = 0; i< 9; i++){
        if(board[i] === ""){
        board[i] = "t";
        }
}
}
const sendMessage = (win)=>{
    message.classList.add("overlay");
    message.classList.add("open");
    display.textContent = win;
    // btnRestart.focus();
}
const play = () => {
    gamePlaying = true;
    for (let i = 0; i< 9; i++){
        let btn = document.querySelector(`.btn${i+1}`);
        let content = btn.innerHTML;  
        btn.addEventListener('click', function(event){
             event.preventDefault();           
             if (board[i] === "" && gamePlaying === true){
                sound.play();
                        // save btn selected to board
                        board[i] = activePlayer.sticker;
                        btn.innerHTML = activePlayer.sticker;                 
                        // --check for win        
                        //Horizontal                                                             
                        if( board[0] == board[1] && board[1] == board[2] && board[2] == activePlayer.sticker || 
                            board[3] == board[4] && board[4] == board[5] && board[5] == activePlayer.sticker || 
                            board[6] == board[7] && board[7] == board[8] && board[8] == activePlayer.sticker){
        
                                    activePlayer.score ++;                                  
                                    soundW.play();
                                    updateScore();
                                    stopGame();   
                                    sendMessage(`${activePlayer.sticker} won !`)                                
                        }
                        //Vertical
                        else if(board[0] == board[3] && board[3] == board[6] && board[6] == activePlayer.sticker || 
                                board[1] == board[4] && board[4] == board[7] && board[7] == activePlayer.sticker || 
                                board[2] == board[5] && board[5] == board[8] && board[8] == activePlayer.sticker){
                                    activePlayer.score ++;
                                    updateScore();
                                    soundW.play();
                                    stopGame();
                                    sendMessage(`${activePlayer.sticker} won !`)

                        }
                        //Diagonal
                        else   if(board[0] == board[4] && board[4] == board[8] && board[8] == activePlayer.sticker || 
                            board[2] == board[4] && board[4] == board[6] && board[6]== activePlayer.sticker ){
                                activePlayer.score ++;
                                updateScore();      
                                soundW.play();        
                                stopGame();
                                sendMessage(`${activePlayer.sticker} won !`)
                            
                        }else if(spot()){
                            tie++;
                            updateScore();   
                            soundT.play();
                            stopGame();
                            sendMessage(`It was a tie! Try again`)
                        }
                        turn.classList.remove("active");
                        nextPlayer();
             }          
           
         });
     }     
}
const restart =() =>{
    message.classList.remove("overlay");
    message.classList.remove("open");
    reset();
    play();
}
// reset the game
const resetGame = () =>{
    
    player1.score = 0;
    player2.score = 0;
    tie = 0;
    updateScore();
    reset();
    play();
}
btnRestart.addEventListener("click",restart);
btnReset.addEventListener("click",resetGame);
btnPlay.addEventListener("click",restart);