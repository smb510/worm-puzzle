"use client";


import OnCompleteHeader from '../components/OnCompleteHeader';
import Header from '../components/Header';
import { Box, Typography, Stack, Button, Link, TextField } from '@mui/material';
import { useState } from 'react';
import { Phase } from '../components/States';

export default function PageFour() {
    const [isCorrect, setCorrect] = useState(false)
    const [phase, setPhase] = useState(Phase.Story)
    return <div>
        <OnCompleteHeader title="Chapter Three: Everyone is Hungry" isComplete={false} button={false} onComplete={(_: boolean) => { }} />
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
                Ok, finally, for real this time we’re on our way! <br />
                But of course it&apos;s 2024 and the sleigh has autopilot. It basically flies itself!<br />
                It's a long way down to Florida, and Santa needs to pass the time.<br />
                He could use some help with his word search. Can you figure out the special word so Santa won&apos;t miss your stop?
            </Typography>
            <Button onClick={(_) => setPhase(Phase.Puzzle)}>
                Sure!
            </Button>
        </div>
    }

    function puzzle() {
        return <div>
            <iframe src='https://strandstudio.thegoodboi.net/play?id=3FAR9S' height={700} />
            <Button onClick={(_) => setPhase(Phase.Completion)}>I'm done!</Button>
        </div>
    }
    function complete() {
        return <div><Typography variant="body1">
            What is the special word?
        </Typography>
            <TextField variant='outlined' label='Guess' onInput={(event: React.ChangeEvent<HTMLInputElement>) => {
                if (event.target.value.toLowerCase() == "decorations") {
                    setCorrect(true)
                }
            }} />
            {isCorrect && <Button><Link href="/five">Down the chimney we go!</Link>
            </Button>}
        </div>
    }
}