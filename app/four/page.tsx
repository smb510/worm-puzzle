"use client";


import Header from '../components/Header';
import { Box, Container, Typography } from '@mui/material';

export default function PageFour() {
    return <Container>
    <Header answer="decorations" nextHref='/five' />
    <Typography variant="subtitle1">
    To advance, enter the spangram
    </Typography>
    <Box
        display="flex"
        justifyContent="center"
        alignItems="center">
        <iframe src='https://strandstudio.thegoodboi.net/play?id=3FAR9S' height={700} />
    </Box>
    </Container>
}