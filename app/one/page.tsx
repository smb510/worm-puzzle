"use client";

import OnCompleteHeader from '../components/OnCompleteHeader';
import { Box } from '@mui/material';
import { useState } from 'react';
import App from '../wordle/App';


export default function PageOne() {
    const [isMatch, setMatch] = useState(false);
    return <div>
        <OnCompleteHeader title="First up, a special Wordle." isComplete={false} button={false} onComplete={(_: boolean) => {}} />
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center">
                <App onGameOver={(success) => {
                    setMatch(success)
                }} />
            </Box>
    </div>

}