import React from 'react'

const GamePage = ({gameUrl}) => {
    return (
        <div className="GamePage">
            <div className="app-panel">
                <div className="title-block">
                    <h3>{gameUrl}</h3>
                </div>
            </div>
            <div className="content-pane">
                Game
            </div>
        </div>
    )
};

export default GamePage;

