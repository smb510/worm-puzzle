"use client";

import Header from '../components/Header';
import { Box, Container, Typography } from '@mui/material';

export default function PageThree() {
    return <Container>
    <Header answer="hollandaise" nextHref='/four' />
    <Typography variant="subtitle1">
    What is traditionally used instead of the sauce in the puzzle?
    </Typography>
    <Box
        display="flex"
        justifyContent="center"
        alignItems="center">
        <iframe src='https://connections.swellgarfo.com/game/-OEe_ITDN_TqqLnzqFOW' height={700} />
    </Box>
    </Container>
}