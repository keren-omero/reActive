import React from 'react';
import '../App.css';

function RandomFunction() {
    const getRandomNumber = () => {
        return Math.floor(Math.random() * 100) + 1;
    };
    return (
        <div className="RandomFunction">
            <h1> The random num is {getRandomNumber()} </h1>
        </div>
    );
}
export default RandomFunction;
