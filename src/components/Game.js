import React, { useEffect, useState } from 'react';
import Deck from './Deck';
import Card from './Card';
import Player from './Player';
import * as firebase from 'firebase/app';
import 'firebase/database';

const allPlayersStyle = {
  display: 'flex'
}
const playerStyle = {
  border: '2px solid black',
  width: '100%'
}

function Game(props) {
  const [deck, setDeck] = useState(new Deck());
  const [currentCard, setCurrentCard] = useState(new Card(0, 'red', 'owow'));
  const [handValue, setHandValue] = useState(0);
  var pArr = [];
  const [players, setPlayers] = useState(() => {
    for(let [...values] of Object.entries(props.onlineUsers)) {
      pArr.push([...values]);
    }
    return pArr;
  });
  const [currentPlayer, setCurrentPlayer] = useState(players[0]);
  const [displayNextPlayer, setDisplayNextPlayer] = useState(false);
  const [currentUser, setCurrentUser] = useState(props.currentUser); 
  function updateDatabase(user, property, value) {
    console.log('Pay close attention to your users...:')
    console.log(user)
    console.log('Pay close attention to your properties...:')
    console.log(property);
    console.log('Pay close attention to your values...:')
    console.log(value)
    firebase.database().ref('users/' + user[0] + '/').set({
      displayName: user.displayName,
      email: user.email,
      uid: user.currentUser.uid,
      score: 0,
      handValue: 0,
      bankrupt: false
    });
  }
  function playerAction(e, hit) {
    e.preventDefault();
    if(hit) {
      setCurrentCard(deck.getTopCard());
    }
    else {
      nextPlayer();
    }
  }
  function nextPlayer(e) {
    e.preventDefault();
    setDisplayNextPlayer(false);
    players.unshift(players.pop());
    setCurrentPlayer(players[0]);
    setCurrentCard(new Card(0, 'oi', 'ok'));
  }
  useEffect(() => {
    setHandValue((prevState) => {
      return prevState + currentCard.faceValue;
    });
  }, [currentCard]);
  useEffect(() => {
    updateDatabase(currentPlayer, 'handValue', handValue);
    if(handValue > 21) {
      currentPlayer[1].handValue = 0;
      currentPlayer[1].bankrupt = true;
      setDisplayNextPlayer(true);
    }
  }, [handValue]);
  useEffect(() => {
    setHandValue(currentPlayer.handValue);
    if(currentPlayer.handValue != 0 || currentPlayer.bankrupt) {
      gameEnd();
    }
  }, [currentPlayer]);
  function gameEnd() {
    let winner = players[0];
    players.map((player) => {
      if(player.handValue > winner.handValue) {
        winner = player;
      }
      player.handValue = 0;
    });
    winner.score++;
    setHandValue(0);
    setCurrentCard(new Card(0, 'oi', 'ok'));
  }
  return (
    <div className="App">
      <form>
        <div style={allPlayersStyle}>
          {
            players.map((player) => {
              return <div style={playerStyle}>
                Player: {player[1].displayName} <br/>
                Score: {player[1].score} <br/>
                Hand value: {player[1].handValue}
              </div>
            })
          }
        </div>
        <div id='currentCard'>{currentCard.faceValue !== 0 ? currentCard.color + " " + currentCard.faceValue + " of " + currentCard.suit : null}</div>
        <div id='handValue'>{'Hand value: ' + handValue}</div>
        {currentPlayer.displayName + '\'s turn!'}
        {
          displayNextPlayer ? <button onClick={(e) => nextPlayer(e)}>Next Player</button> : 
          <div>
            <button onClick={(e) => playerAction(e, true)}>Hit</button>
            <button onClick={(e) => nextPlayer(e)}>Pass</button>
          </div>
        }
      </form>
    </div>
  );
}

export default Game;