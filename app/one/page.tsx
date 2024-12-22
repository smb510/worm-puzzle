"use client";

import Header from '../components/Header';
import { Box, Container } from '@mui/material';

export default function PageOne() {
    return <Container>
        <Header answer="SANTA" nextHref='/two' />
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center">
            <iframe src='https://mywordle.strivemath.com/?id=e51ecf1e-b8db-4de5-9b50-a4feebb3bd3e' height={700} />
        </Box>
    </Container>

}