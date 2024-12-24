"use client";

import OnCompleteHeader from './components/OnCompleteHeader';
import { Button, Typography, Box } from '@mui/material';
import Link from "next/link";
import { redirect } from "next/navigation";

/*eslint no-unused-vars: ["error", { "argsIgnorePattern": "^_" }]*/

export default function Home() {
  return (
    <div>
      <OnCompleteHeader isComplete={false} button={false} onComplete={(_) => {
        redirect("/one")
      }} />
      <Typography variant='h2'>
        Merry Christmas!
      </Typography>
      <Typography variant='body1'>
        As you know, it&apos;s Christmas morning, but your secret Santa had a little trouble getting your gift all the way to Florida.<br />
        He keeps getting stuck, and he needs your help!
      </Typography>
      <Box textAlign="center">
        <Button variant='outlined'
          sx={{
            borderRadius: 10,
            padding: 2, margin: 2
          }}>
          <Link href="/one">Help Santa</Link>
        </Button>
      </Box>
    </div >
  );
}
