import Container from '@mui/material/Container'
import { OnCompleteHeader } from './components/OnCompleteHeader';
import { Typography } from '@mui/material';

export default function Home() {
  return (
    <Container>
      <OnCompleteHeader isComplete={true} nextHref='/one' />
      <Typography variant='h2'>
        Merry Christmas, Caitlin!
      </Typography>
      <Typography variant='body1'>
        Merry Christmas, Caitlin!<br />
        It is hard to bring your present from home, and have you bring it home... so I am going to make you work for it a little bit.<br />
      Here are some puzzles for you to do in order to find out what you are getting. <br />
      Hit the button at the top right to get started! <br />
      </Typography>
    </Container>
  );
}
