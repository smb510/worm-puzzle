"use client";

import { useState } from 'react';
import CrosswordPuzzle from '../crossword/Crossword';
import OnCompleteHeader from '../components/OnCompleteHeader';
import { Typography } from '@mui/material';
import { redirect } from 'next/navigation';

export default function PageTwo() {

    function onComplete(isComplete: boolean) {
        if (isComplete) {
            redirect("/three");
        }
    }
    const [isCrosswordCorrect, setCrosswordCorrect] = useState(false)

    return <div>
        <OnCompleteHeader isComplete={false} button={isCrosswordCorrect} title={"Complete the crossword to continue."} onComplete={onComplete} />
        {!isCrosswordCorrect && CrosswordPuzzle((isCorrect: boolean) => setCrosswordCorrect(isCorrect))}
        {isCrosswordCorrect && <Typography variant='h2' sx={{ width: '100vw' }}>Congratulations! You solved the puzzle!</Typography>}
    </div>
}