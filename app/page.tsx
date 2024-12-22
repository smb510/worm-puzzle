"use client";

import { OnCompleteHeader } from './components/OnCompleteHeader';
import { Typography, Snackbar } from '@mui/material';
import { useState } from 'react';
import { redirect } from "next/navigation";

export default function Home() {
  const [isComplete, setComplete] = useState(false);
  return (
    <div>
      <OnCompleteHeader isComplete={false} button={true} onComplete={(v) => {
        setComplete(v)
      }} />
      <Typography variant='h2'>
        Merry Christmas, Caitlin!
      </Typography>
      <Typography variant='body1'>
        Merry Christmas, Caitlin!<br />
        It is hard to bring your present from home, and have you bring it home... so I am going to make you work for it a little bit.<br />
        Here are some puzzles for you to do in order to find out what you are getting. <br />
        Hit the button at the top right to get started! <br />
      </Typography>
      {isComplete &&
        <Snackbar message="Correct!" open
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          autoHideDuration={2000}
          onClose={redirect("/one")} />
      }
    </div>
  );
}
