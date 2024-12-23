"use client";

import { useState } from 'react';
import CrosswordPuzzle from '../crossword/Crossword';
import OnCompleteHeader from '../components/OnCompleteHeader';
import { Box, Typography, Button } from '@mui/material';
import { redirect } from 'next/navigation';
import { Phase } from '../components/States';


export default function PageTwo() {

    const [phase, setPhase] = useState(Phase.Story)

    return <div>
        <OnCompleteHeader title="Chapter Two: Like Herding Cats..." isComplete={false} button={false} onComplete={(_: boolean) => { }} />
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
                Phew! Now that Santa has unlocked his sleigh, he needs some help corralling his reindeer.<br />
                He&apos;s got 6 of them there, Rudolph included, but 3 are still missing in action.<br />
                Can you help Santa figure out which ones are missing?
            </Typography>
            <Button onClick={(_) => setPhase(Phase.Puzzle)}>
                Here, little reindeer!
            </Button>
        </div>
    }

    function puzzle() {
        return <CrosswordPuzzle completionListener={
            (isCorrect: boolean) => {
                if (isCorrect) {
                    setPhase(Phase.Completion)
                }
            }} />
    }

    function complete() {
        return <div>
            <Typography variant="h6">You did it!</Typography>
            <Typography variant='body1'>But there's more to do... Santa's woes continue.</Typography>
            <Button onClick={(_) => redirect("/three")}>
                On to the next thing...
            </Button>
        </div>

    }
}