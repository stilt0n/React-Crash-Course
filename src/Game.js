import React, { useState } from 'react';

import { SecretWord } from './components/SecretWord';
import { UserInput } from './components/UserInput';
import { HangmanDisplay } from './components/HangmanDisplay';

const words = [
    'farmer',
    'market',
    'horse',
    'house'
];

const chooseRandomWord = () => words[Math.floor(Math.random() * 4)];

const checkWin = (word, guessed) => word.split('').every(letter => guessed.has(letter));

const MAX_GUESSES = 8; // This is how many hangman pictures I have

export const Game = () => {
    
    const [guessedLetters, setGuessedLetters] = useState(new Set());
    const [chosenWord, setChosenWord] = useState(chooseRandomWord());
    const [guessCount, setGuessCount] = useState(0);

    const guessHandler = (letter) => {
        const next = new Set(guessedLetters);
        next.add(letter);
        setGuessedLetters(next);
        if(chosenWord.search(letter) === -1) {
            setGuessCount(c => c + 1);
        }
    }

    const handleReset = () => {
        setGuessedLetters(new Set());
        setChosenWord(chooseRandomWord());
        setGuessCount(0);
    }

    const RegularDisplay = (
        <>
            <SecretWord chosenWord={chosenWord} guessedLetters={guessedLetters}/>
            <UserInput guessedLetters={guessedLetters} guessHandler={guessHandler} />
        </>
    );

    const WinDisplay = (
        <>
            <h1>You Win!</h1>
            <button onClick={handleReset}>Reset</button>
        </>
    );

    const LoseDisplay = (
        <>
            <h1>You Lose! The word was {chosenWord}</h1>
            <button onClick={handleReset}>Reset</button>
        </>
    );
    
    let currentDisplay;
    if(guessCount < MAX_GUESSES) {
        currentDisplay = checkWin(chosenWord, guessedLetters) ? WinDisplay : RegularDisplay;
    } else {
        currentDisplay = LoseDisplay;
    }

    return (
        <div id='hangman-game'>
            <HangmanDisplay stageNumber={guessCount}/>
            {currentDisplay}
        </div>
    );
}