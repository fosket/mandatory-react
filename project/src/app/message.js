/*
The Message component expects to be passed...
- state: a game state string (plr1,plr2,plr1won,plr2won,draw)

The component will then render an appropriate message.
*/

import React from 'react';

export default function Message(props){
  const currentGameState = props.board.state;

  switch(currentGameState) {
      case 'plr1':
        return (
            <div> X:s turn </div>
        );
      case 'plr2':
          return (
              <div> O:s turn </div>
          );
      case 'plr1won':
          return (
              <div> X has won the game </div>
          );
      case 'plr2won':
          return (
              <div> O has won the game </div>
          );
      case 'draw':
          return (
              <div> It's a draw! Restart the game to play again. </div>
          );
      default:
          return (
              <div> Oops... Something went wrong! </div>
          );
    }
}
