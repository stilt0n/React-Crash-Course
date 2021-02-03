import React from 'react';

const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

const InputButton = ({ letter, disabled, guessHandler }) => {
    const handleGuess = () => guessHandler(letter);
    return <button className='input-button' onClick={handleGuess} disabled={disabled}>{letter.toUpperCase()}</button>;
}

export const UserInput = ({ guessedLetters, guessHandler }) => {
    return (
        <div id='user-input'>
            {alphabet.map(letter => <InputButton letter={letter} disabled={guessedLetters.has(letter)} guessHandler={guessHandler} key={letter}/>)}
        </div>
    );
}