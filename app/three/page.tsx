"use client";

import OnCompleteHeader from '../components/OnCompleteHeader';
import { Box, Typography, Stack, Button, Link, TextField } from '@mui/material';
import { useState } from 'react';
import { Phase } from '../components/States';
import Connections from '../connections/Connections';
import { redirect } from 'next/navigation';
import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';

export default function PageThree() {

    const Connexions = dynamic(() => import('../connections/Connections'), { ssr: false });

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
            <Box textAlign="center">
                <Button
                    variant='outlined'
                    sx={{
                        margin: 2,
                        borderRadius: 10,
                        padding: 2
                    }}
                    onClick={(_) => setPhase(Phase.Puzzle)}>
                    Soup&apos;s on!
                </Button>
            </Box>
        </div>
    }

    function puzzle() {
        return <Box sx={{
            margin: 2,
        }}>
            <Connexions onComplete={() => redirect("/four")} />
        </Box>
    }
    function complete() {
        return <div>
        </div>
    }
}