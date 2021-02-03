import React from 'react';

export const SecretWord = ({ chosenWord, guessedLetters }) => {
    const display = chosenWord.split('').map(letter => guessedLetters.has(letter) ? letter : '_').join(' ');
    return (
        <div className='secret-word'>
            <h1 id='secret-word-display'>{display}</h1>
        </div>
    );
}