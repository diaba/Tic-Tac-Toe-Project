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
//player1.score = parseInt(localStorage.getItem('score'))|| 0;
//console.log(player1.score );
player1.score = 0;
player2.score = 0;
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

//   update score 
function updateScore(){
    document.querySelector(".tockenX").innerHTML = `X : ${player1.score}`;
    document.querySelector(".tockenO").innerHTML = `O : ${player2.score}`;
} 

  // Get board value
let btn1 = document.querySelector(".btn1").innerHTML;
let btn2 = document.querySelector(".btn2").innerHTML;
let btn3 = document.querySelector(".btn3").innerHTML;
let btn4 = document.querySelector(".btn4").innerHTML;
let btn5 = document.querySelector(".btn5").innerHTML;
let btn6 = document.querySelector(".btn6").innerHTML;
let btn7 = document.querySelector(".btn7").innerHTML;
let btn8 = document.querySelector(".btn8").innerHTML;
let btn9 = document.querySelector(".btn9").innerHTML;

let btnReset = document.querySelector(".restart");
let btnPlay = document.querySelector(".start");

  const reset = () => {
      document.querySelector(".turn").innerHTML = "";
      for(let i= 0; i< 9; i++){ 
      let btn = document.querySelector(`.btn${i+1}`)
        board[i]="";
        btn.innerHTML = "";
    }
    
 }


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
        let btn = document.querySelector(`.btn${i+1}`);
        let content = btn.innerHTML;  
        document.querySelector(".turn").innerHTML = `${activePlayer.sticker} turn.`;
        btn.addEventListener('click', function(event){
             event.preventDefault();           
             if (board[i] === ""){
                        // save btn selected to board
                        board[i] = activePlayer.sticker;
                        // -- save it to board
                        // -- print x to front page
                        btn.innerHTML = activePlayer.sticker;
                    
                        // --check for win        
                        //Horizontal                                                             
                        if( board[0] == board[1] && board[1] == board[2] && board[2] == activePlayer.sticker || 
                            board[3] == board[4] && board[4] == board[5] && board[5] == activePlayer.sticker || 
                            board[6] == board[7] && board[7] == board[8] && board[8] == activePlayer.sticker){
                            //    set player1.score to score + 1
                                    activePlayer.score ++;
                                    
                                    // localStorage.setItem("Name",activePlayer.name);
                                    updateScore();
                                    alert(`${activePlayer.sticker} is the winner`);
                                    reset();
                                   
                                   
                                
                        }
                        //Vertical
                        else if(board[0] == board[3] && board[3] == board[6] && board[6] == activePlayer.sticker || 
                                board[1] == board[4] && board[4] == board[7] && board[7] == activePlayer.sticker || 
                                board[2] == board[5] && board[5] == board[8] && board[8] == activePlayer.sticker){
                                    activePlayer.score ++;
                                    updateScore();
                                    reset();
                                   
                        }
                        //Diagonal
                        else   if(board[0] == board[4] && board[4] == board[8] && board[8] == activePlayer.sticker || 
                            board[2] == board[4] && board[4] == board[6] && board[6]== activePlayer.sticker ){
                                activePlayer.score ++;
                                updateScore();
                                    reset();
                                    
                            
                        }else if(spot()){
                           
                                    reset();
                            
                        }
                        nextPlayer();
                        document.querySelector(".turn").innerHTML = `${activePlayer.sticker} turn.`;
             }          
            
         });
     }     
}


btnReset.addEventListener("click",reset);
btnPlay.addEventListener("click",play);