import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Merry Christmas, Caitlin!</h1>
      <h2>It is hard to bring your present from home, and have you bring it home</h2>
      <p>So I am going to make you work for it a little bit.</p>
      <p>Here are some puzzles for you to do in order to find out what you are getting.</p>
      <MobileStepper
                variant="dots"
                activeStep={0}
                steps={6}
                nextButton={
                    <Button size="small" disabled={false}>
                        <Link href="/one">Next</Link>
                    </Button>
                }
                backButton={
                    <Button size="small" disabled={true}>
                        <Link href="/">Back</Link>
                    </Button>
                }
            />
    </div>
  );
}
