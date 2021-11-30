# Tic-Tac-Toe-Project
### User Stories

- As a user, I should be able to start a new tic tac toe game
- As a user, I should be able to click on a square to add X first and then O, and so on
- As a user, I should be shown a message after each turn for if I win, lose, tie or who's turn it is next
- As a user, I should not be able to click the same square twice
- As a user, I should be shown a message when I win, lose or tie
- As a user, I should not be able to continue playing once I win, lose, or tie
- As a user, I should be able to play the game again without refreshing the page

### Color picked is 
blue to comfort and make the user to relax while playing 
### pseudocode
create class player
- name
- pick (X,o)
create class game
-- score
-- winner
- show score
- show winner
- start game
- restart game

// playing the game
set points to zero
- set player 1 and player 2[x,o]
-activeplayer to player1

  - loop j from 0 to 9
    -- print activeplayer turn
    -- get the grid clicked from front page
       --- lock the grid
    -- save it to board
    -- print x to front page
    --check for win
       if activeplayer wins then
         set player1.score to score + 1
         print active is the winner front page
         exit the game
    next player
set  draw

// reset game
set points to zero(x and o)

// restart game
clean board
clean front page

