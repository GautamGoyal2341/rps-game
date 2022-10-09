import React from "react";
import Rock from "./icons/Rock";
import paper from "./icons/paper";
import Scissors from "./icons/Scissors";

import './App.css'

function App()
{
    return (
        <div className="app">
            <div className="info">

                <h2>Rock . Paper . Scissors</h2>



                <div className="win-losses">
                    <div className="wins">
                        <span className="number">0</span>
                        <span className="text">Wins</span>

                    </div>


                    <div className="losses">
                        <span className="number">0</span>
                        <span className="text">Losses</span>
                    </div>



                </div>

            </div>
        </div>
    )
}

export default App; 