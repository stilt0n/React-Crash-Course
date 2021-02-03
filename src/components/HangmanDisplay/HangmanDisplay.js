import React from 'react';
import stage0 from '../../resources/stage-0.jpg';
import stage1 from '../../resources/stage-1.jpg';
import stage2 from '../../resources/stage-2.jpg';
import stage3 from '../../resources/stage-3.jpg';
import stage4 from '../../resources/stage-4.jpg';
import stage5 from '../../resources/stage-5.jpg';
import stage6 from '../../resources/stage-6.jpg';
import stage7 from '../../resources/stage-7.jpg';
import stage8 from '../../resources/stage-8.jpg';
import './HangmanDisplay.css'

const imgSrcArray = [stage0, stage1, stage2, stage3, stage4, stage5, stage6, stage7, stage8];

export const HangmanDisplay = ({ stageNumber }) => {
    return <img src={imgSrcArray[stageNumber]} alt={`hangman stage ${stageNumber} out of 8`} id='hangman-display' />;
}