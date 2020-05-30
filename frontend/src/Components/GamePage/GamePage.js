import React, { useEffect, useState } from 'react';
import axios from "axios";

import './GamePage.css'

const SELECTIONS = {
  cropYield: 'Crop Yield',
  pastureYield: 'Pasture Yield',
  oreYield: 'Ore Yield',
  woodYield: 'Wood Yield',
  freshWater: 'Fresh Water',
}

const OPTIONS = {
  debug: false,
}

const loadPlayers = async (setPlayers) => {
  const promise = await axios.get("http://127.0.0.1:8000/players");
  const status = promise.status;
  if (status === 200) {
    const data = promise.data.data;
    console.log(data);
    setPlayers(data.players);
  }
};

const loadBoard = async (setBoard) => {
  const promise = await axios.get("http://127.0.0.1:8000/board/1");
  const status = promise.status;
  if (status === 200) {
    const data = promise.data;
    console.log(data);
    setBoard(data.data);
  }
};

const getColor = (blah) => {
  return `#${9 - blah}${blah}2`;
};

const getBoxStyle = (board, x, y, selection) => {
  return {
    width: '25px',
    height: '25px',
    textAlign: 'center',
    backgroundColor: selection ? getColor(board[selection][y * board.xSize + x]) : 'grey',
  }
};

const debug = (board, x, y, selection) => {
  return board[selection][board.xSize * y + x];
};

const GamePage = ({ gameUrl }) => {
  const [players, setPlayers] = useState({});
  const [board, setBoard] = useState({});
  const [selection, setSelection] = useState('cropYield');
  const [options, setOptions] = useState(OPTIONS);

  useEffect(() => {
    loadPlayers(setPlayers);
  }, [setPlayers]);

  useEffect(() => {
    loadBoard(setBoard);
  }, [setBoard]);

  return (
    <div className='GamePage'>
      <div className="app-panel">
        <div className="title-block">
          <h3>{gameUrl}</h3> Players:
          {Object.keys(players).map((playerKey) => (<span key={playerKey}>{players[playerKey].IP}</span>))}
        </div>
      </div>
      <div className="content-pane">
        {board.cropYield && Array(board.ySize).fill().map((_, y) => (
          <div className='gameRow'>{Array(board.xSize).fill().map((_, x) =>
          <div style={getBoxStyle(board, x, y, selection)}>{options.debug && debug(board,x,y, selection)}</div>)}<br></br>
          </div>
        ))}
        <div className='switchers'>
          {Object.keys(SELECTIONS).map((selection) => 
            <button className='switcher' onClick={() => 
              setSelection(selection)}>{SELECTIONS[selection]}
            </button>)}
        </div>
        <div className='controls'>
          <button onClick={() => setOptions({debug: !options.debug})}>Show details</button>
          <button onClick={() => {}}>End turn</button>
        </div>
      </div>
    </div>
  )
};

export default GamePage;

