// Player class
class Player{
    constructor(name,sticker){
        this.name = name;
        this.sticker = sticker;
    }
}
class Game{
    constructor() {
        this.score = [[],[]];
        this.players=[];
        this.activePlayer = 0;
        this.board = [[],[],[]];
    }
    start(){

        for (var i = 0; i < 3; i++) {
            for (var j = 0; j<3; j++){
               this.board[i][j] = ""; 
            }
            
          }
        
    }
    play(player,i,j){
        if(this.checkSpot(i,j)){
            if (this.activePlayer === this.players[0]){
           this.board[i][j] = this.players[0].sticker; 
           this.score[0].push([i,j]);
        }else{
            this.board[i][j] = this.players[1].sticker; 
           this.score[1].push([i,j]);
        }
        }               
    }
   score(){
       return this.score;
   }
   addPlayer(player){
    return this.players.push(player);
   }
   nextPlayer(){
   return this.activePlayer === this.players[0] ? (this.activePlayer = this.players[1]) : (this.activePlayer = this.players[0]);
    //roundScore = 0;
   }
   checkWinner(){
       var winning = [[[0,0],[1,0],[2,0]],[[0,1],[1,1],[2,1]],[[0,2],[1,2],[2,2]],[[0,0],[0,1],[0,2]],[[1,0],[1,1],[1,2]],[[2,0],[2,1],[2,2]],[[0,0],[1,1],[2,2]]];
// check spot availability
     if (this.checkSpot()){
        if (winning.includes(this.score[0]))
        {
           return this.players[0].player;
        }else if(winning.includes(this.score[1])){
            return this.players[1].player;
        }
     }else{
         return "tie";
     }
    
      }
      checkSpot(){
          for(let i=0; i<3; i++){
              for(let j=0; j<3; j++){
                  if (this.board[i][j]=== ""){
                      return true;
                      break;
                  }
              }
          }
          return false;
      }
   checkSpot(i,j){
      return this.board[i][j] === "";}
}


var game = new Game();
console.log(game.board);
game.start();

habsa = new Player("habsa","o");
sa = new Player("Amadou","x");
game.addPlayer(habsa);
game.addPlayer(sa);


console.log(game.board[0][0] == '');
// game.activePlayer = game.players[0];
// game.play(game.activePlayer,0,0);
// console.log(game.score[0]);
// console.log(game.board);

// game.nextPlayer();
// game.play(game.activePlayer,0,1);
// console.log(game.score[1]);
// console.log(game.board);

// game.nextPlayer();
// game.play(game.activePlayer,0,2);
// console.log(game.score[1]);
// console.log(game.board);

// game.nextPlayer();
// game.play(game.activePlayer,1,2);
// console.log(game.board);

// game.nextPlayer();
// game.play(game.activePlayer,1,0);
// console.log(game.board);
// console.log(game.checkWinner());
// - set player 1 and player 2[x,o]
// - loop i from 0 to 3
//   - loop j from 0 to 3
//     -- print player 1 turn
//     -- scan chose player from empty box
//     -- print x
//     -- save position to player 2 array
//      -- print player 1 turn
//     -- scan chose player from empty box
//     -- print x
//     -- save position to player 2 array
// check for win

// check for draw

