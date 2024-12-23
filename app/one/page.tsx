"use client";

import OnCompleteHeader from '../components/OnCompleteHeader';
import { Box, Typography, Button } from '@mui/material';
import { useState } from 'react';
import Wordle from '../wordle/App';
import { State } from '../components/States';


export default function PageOne() {
    const [states, setStates] = useState(State.Story)
    return <div>
        <OnCompleteHeader title="Chapter One: Locked out" isComplete={false} button={false} onComplete={(_: boolean) => { }} />
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center">
            {states == State.Story && story() }
            {states == State.Puzzle && puzzle()}
        </Box>
    </div>


    function story() {
        return <div>
            <Typography variant="body1">
                First things first, Secret Santa needs to unlock his sleigh. He set his passcode to a five letter word, and he can&apos;t seem to remember it! His phone tells him a few things after he guesses a password: he knows which letters are right and in the right place, and which ones are the right letter, but in the wrong place. He only gets six tries to get it right… do you think you can help him guess?
            </Typography>
            <Button onClick={(_) => setStates(State.Puzzle)}>
                Unlock the sleigh
            </Button>
        </div>
    }

    function puzzle() {
        return <Wordle onGameOver={(success) => {
            // if (success) {
            //     setStates(State.Completion)
            // }
        }} />
    }

}