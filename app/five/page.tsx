"use client";

import { OnCompleteHeader } from '../components/OnCompleteHeader';
import { Box, Typography, Stack } from '@mui/material';

export default function Home() {
  return (
    <div>
      <OnCompleteHeader isComplete={true} button={false}  />
      <Typography variant='h2'>
        You did it!
      </Typography>
      <Typography variant='body1'>
       Congratulations, you solved all the puzzles! <br />
       As a reward, you get to pick from one of two options:<br />
       <Stack direction="row">
       <Box sx={{flexGrow: 1}}>
        <b>Option 1:</b> A fancy rice cooker to help with meal prep.
       </Box>
       <Box sx={{flexGrow: 1}}>
       <b>Option 2:</b> A six-month subscription to Book of the Month.
        </Box>
        </Stack>
        Which will it be?
      </Typography>
    </div>
  );
}
