"use client";

import OnCompleteHeader from '../components/OnCompleteHeader';
import { Box, Typography, Stack, Button, Link, TextField } from '@mui/material';
import { useState } from 'react';
import { Phase } from '../components/States';

export default function PageThree() {

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
                Alright, the gang is all here and we&apos;re ready to go. But oh no!<br />
                The three late reindeer and Rudolph are still hungry and won&apos;t go before they have a meal.<br />
                Each of them eats a specific color of feed, but we can&apos;t tell which is which!<br />
                We only know that of the 16 feed bags, there are 4 groups of 4, all based on their labels.<br />
                Can you help Santa get all the food organized so he can get going?
            </Typography>
            <Button onClick={(_) => setPhase(Phase.Puzzle)}>
                Soup&apos;s on!
            </Button>
        </div>
    }

    function puzzle() {
        return <div>
            <iframe src='https://connections.swellgarfo.com/game/-OEe_ITDN_TqqLnzqFOW' height={700} />
            <Button onClick={(_) => setPhase(Phase.Completion)}>I'm done!</Button>
        </div>
    }
    function complete() {
        return <div><Typography variant="body1">
            One last thing... the reindeer whose feed bags were <span color="yellow">yellow</span> doesn't like the sauce he got with his oats.<br />
            He's a traditionalist, and prefers the original sauce. (Rude!)<br />
            Which sauce should we have given him instead?
        </Typography>
            <TextField variant='outlined' label='Guess' onInput={(event: React.ChangeEvent<HTMLInputElement>) => {
                if (event.target.value.toLowerCase() == "hollandaise") {
                    setCorrect(true)
                }
            }} />
            {isCorrect && <Button><Link href="/four">And we're off!</Link>
            </Button>}
        </div>
    }
}