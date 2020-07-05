import React, { useEffect, useCallback, useState } from 'react'
import axios from "axios";

import './GameLobby.css';
import { NEW_PLAYER, PLAYERS } from "../../Utils/urls";

const postName = async (gameID, name) => {
  const promise = await axios.post(NEW_PLAYER(gameID), { name }, { withCredentials: true });
  if (promise.status === 200) {
    console.log("Set Name to", name);
  }
}

const loadPlayers = async (gameID, setPlayers) => {
  const promise = await axios.get(PLAYERS(gameID));
  const status = promise.status;
  if (status === 200) {
    const data = promise.data.data;
    if (data.players)
      setPlayers(data.players);
  }
};

const GameLobby = ({ gameID }) => {
  const [name, setName] = useState('');
  const [players, setPlayers] = useState({});
  const [poll, setPoll] = useState({});

  useEffect(() => {
    clearInterval(poll);
    setPoll(setInterval(() => loadPlayers(gameID, setPlayers), 1000));
  }, [gameID, setPlayers]);

  const nameSubmit = useCallback(event => {
    postName(gameID, name).then(() => loadPlayers(gameID, setPlayers));
    event.preventDefault();
  }, [name, gameID]);

  return (
    <div className={'GameLobby'}>
      <form onSubmit={nameSubmit}>
        <label>
          Name:
          <br></br>
          <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
        </label>
        <input disabled={20 < name.length || name.length < 3} type="submit" value="Enter" />
        {players.length > 1 && <button onClick={() => { }}>Start Game</button>}
      </form>
      <br></br>
      Players:
      <ul className={'PlayerList'}>
        {Object.keys(players).map((playerKey) => (<li key={playerKey}>{players[playerKey]}</li>))}
      </ul>
    </div>
  );
}

export default GameLobby;