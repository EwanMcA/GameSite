import React, { useEffect, useState } from 'react';
import axios from "axios";

import './GamePage.css'
import GameLobby from '../GameLobby/GameLobby'

const OPTIONS = {
  debug: false,
}

const loadBoard = async (setBoard) => {
  const promise = await axios.get("http://127.0.0.1:8000/board/1");
  const status = promise.status;
  if (status === 200) {
    const data = promise.data;
    console.log(data);
    setBoard(data.data);
  }
};

const GamePage = ({ gameUrl, gameID }) => {
  const [board, setBoard] = useState({});

  useEffect(() => {
    loadBoard(setBoard);
  }, [setBoard]);

  return (
    <>
      <GameLobby gameID={gameID}></GameLobby>
      <br></br>
      <br></br>
      <div className='GamePage'>
        <div className="app-panel">
          <div className="title-block">
            <h3>{gameUrl}</h3>
          </div>
        </div>
        <div className="content-pane">
        </div>
      </div>
    </>
  )
};

export default GamePage;

