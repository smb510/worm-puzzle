"use client";

import Header from '../components/Header';
import { Box, Button, Typography, Stack } from '@mui/material';
import { useState } from 'react';
import Link from 'next/link';

export default function PageOne() {
    const [isMatch, setMatch] = useState(false);
    return <div>
        <Header question="Enter the answer to continue"
        answer="SANTA" onMatch={(match) =>
            setMatch(match)
        } />
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center">
            {!isMatch &&
                <iframe src='https://mywordle.strivemath.com/?id=e51ecf1e-b8db-4de5-9b50-a4feebb3bd3e' height={700} />}
        </Box>
        {isMatch &&
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center">
                <Stack direction="column">
                    <Typography variant='h2'>
                        Correct! But you&apos;re not quite done yet.
                    </Typography>
                    <Button>
                        <Link href="/two">Next</Link>
                    </Button>
                </Stack>

            </Box>

        }
    </div>

}