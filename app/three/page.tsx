"use client";

import Header from '../components/Header';
import { Box, Typography, Stack, Button, Link } from '@mui/material';
import {useState} from 'react';

export default function PageThree() {

    const [isMatch, setMatch] = useState(false);

    return <div>
    <Header answer="hollandaise" onMatch={(isMatch) => setMatch(isMatch)} question="What is the traditional sauce alternative?"/>
    {!isMatch &&
    <Box
        display="flex"
        justifyContent="center"
        alignItems="center">
        <iframe src='https://connections.swellgarfo.com/game/-OEe_ITDN_TqqLnzqFOW' height={700} />
    </Box>}
    {isMatch &&
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center">
            <Stack direction="column">
                <Typography variant='h2'>
                    Nice! Not too much more now.
                </Typography>
                <Button>
                    <Link href="/four">Next</Link>
                </Button>
            </Stack>
        </Box>

    }
    </div>
}