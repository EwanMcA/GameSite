import React from 'react'
import axios from "axios";
import { navigate } from '@reach/router';

import { BASE, NEW_GAME } from "../../Utils/urls";

const newGame = async (gameUrl) => {
  const promise = await axios.get(NEW_GAME);
  if (promise.status === 200) {
    if (promise.data.game_link) {
      navigate(`${BASE}/${gameUrl}/${promise.data.game_link}`);
    }
  }
};

const GameMenu = ({gameUrl}) => {
  return (
    <div>
      <button onClick={() => newGame(gameUrl)}>New Game</button>
    </div>
  );
}

export default GameMenu;