import React, { useEffect, useState } from 'react';
import axios from "axios";

const loadPlayers = async (setPlayers) => {
    const promise = await axios.get("http://127.0.0.1:8000/players");
    const status = promise.status;
    if (status === 200) {
        const data = promise.data.data;
        console.log(data);
        setPlayers(data.players);
    }
};

const GamePage = ({ gameUrl }) => {
    const [players, setPlayers] = useState({});

    useEffect(() => {
        loadPlayers(setPlayers);
    }, [setPlayers]);

    return (
        <div className="GamePage">
            <div className="app-panel">
                <div className="title-block">
                    <h3>{gameUrl}</h3>
                </div>
            </div>
            <div className="content-pane">
                Here's a Game <br></br> Players:
                <ul>
                    { Object.keys(players).map((playerKey) => (<li key={playerKey}>{players[playerKey].IP}</li>)) }
                </ul>
            </div>
        </div>
    )
};

export default GamePage;

