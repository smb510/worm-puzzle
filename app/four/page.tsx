"use client";


import Header from '../components/Header';
import { Box, Typography, Stack, Button, Link } from '@mui/material';
import { useState } from 'react';

export default function PageFour() {

    const [isMatch, setMatch] = useState(false)

    return <div>
    <Header answer="decorations" question="What is the spangram?" onMatch={(b) => setMatch(b)}/>
    {!isMatch &&
    <Box
        display="flex"
        justifyContent="center"
        alignItems="center">
        <iframe src='https://strandstudio.thegoodboi.net/play?id=3FAR9S' height={700} />
    </Box>
    }
        {isMatch &&
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center">
            <Stack direction="column">
                <Typography variant='h2'>
                    Way to go! Something cool awaits.
                </Typography>
                <Button>
                    <Link href="/five">Next</Link>
                </Button>
            </Stack>
        </Box>

    }
    </div>
}