"use client";

import OnCompleteHeader from '../components/OnCompleteHeader';
import { Box, Typography, Button } from '@mui/material';
import { useState } from 'react';
import Wordle from '../wordle/App';
import { redirect } from "next/navigation";
import { Phase } from '../components/States';


export default function PageOne() {
    const [phase, setPhase] = useState(Phase.Story)
    return <div>
        <OnCompleteHeader title="Chapter One: Locked out" isComplete={false} button={false} onComplete={(_: boolean) => { }} />
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center">
            {phase == Phase.Story && story()}
            {phase == Phase.Puzzle && puzzle()}
            {phase == Phase.Completion && complete()}
        </Box>
    </div>


    function story() {
        return <div>
            <Typography variant="body1">
                First things first, Secret Santa needs to unlock his sleigh. He set his passcode to a five letter word, and he can&apos;t seem to remember it! His phone tells him a few things after he guesses a password: he knows which letters are right and in the right place, and which ones are the right letter, but in the wrong place. He only gets six tries to get it right… do you think you can help him guess?
            </Typography>
            <Button onClick={(_) => setPhase(Phase.Puzzle)}>
                Unlock the sleigh
            </Button>
        </div>
    }

    function puzzle() {
        return <Wordle onGameOver={(success) => {
            if (success) {
                setPhase(Phase.Completion)
            }
        }} />
    }

    function complete() {
        return <div>
            <Typography variant="h6">You did it!</Typography>
            <Typography variant='body1'>But there's more to do... Santa's woes continue.</Typography>
            <Button onClick={(_) => redirect("/two")}>
                On to the next thing...
            </Button>
        </div>

    }

}