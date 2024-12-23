"use client";

import OnCompleteHeader from '../components/OnCompleteHeader';
import { Box, Typography, Stack, Card, CardContent, CardMedia } from '@mui/material';


function GiftCard({ img, title, desc }: { img: string, title: string, desc: string }) {
  return <Card>
    <CardMedia
      sx={{ height: 140 }}
      image={img}
      title=""
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {title}
      </Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        {desc}
      </Typography>
    </CardContent>
  </Card>
}

export default function Home() {
  return (
    <div>
      <OnCompleteHeader isComplete={true} button={false} onComplete={(_) => { }} />
      <Typography variant="body1">
        You did it!
        Congratulations, you solved all the puzzles, and Santa made it to Stuart!<br />
        As a reward, you get to pick from one of two options:<br />
      </Typography>
      <Stack direction="row"
        spacing={3}
        sx={{ paddingX: "40px" }}>
        <GiftCard img="https://d1b5h9psu9yexj.cloudfront.net/13297/Zojirushi-Neuro-Fuzzy-NS-ZCC10_20180703-173021_full.jpeg"
          title="Awesome Kitchen Tool"
          desc="A Zojirushi rice cooker that can make rice, soups, and is great for meal prep!" />
        <GiftCard img="https://static.bookofthemonth.com/cdn-cgi/image/format=auto,width=1920/https://static.bookofthemonth.com/Landing_page/image03.png"
          title="Something new to read!"
          desc="A six-month subscription to Book of the Month so you can add to your library." />
      </Stack>
    </div >
  );
}
