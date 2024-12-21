import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import Guess from './Guess';
import { useState } from 'react';
import Link from "next/link";

export default function Page({ title, embedUrl, question, answer, index, nextPath, backPath }
    : {
        title: string,
        embedUrl?: string,
        question?: string,
        answer: string,
        index: number,
        nextPath: string,
        backPath: string
    }) {
    const [isGuessCorrect, setGuessCorrect] = useState(false);
    const useEmbed = embedUrl != null;
    return <div>
        <h1>{title}</h1>
        {useEmbed && <iframe height="700" width="600" src={embedUrl} />}
        <footer className='block'>
            { (question != null) &&
                <h3>{question}</h3>
            }
            <Guess answer={answer} onGuessCorrect={() => setGuessCorrect(true)} onGuessIncorrect={() => setGuessCorrect(false)} />
            <MobileStepper
                variant="dots"
                activeStep={index}
                steps={6}
                nextButton={
                    <Button size="small" disabled={!isGuessCorrect}>
                        <Link href={nextPath}>Next</Link>
                    </Button>
                }
                backButton={
                    <Button size="small" disabled={false}>
                        <Link href={backPath}>Back</Link>
                    </Button>
                }
            />
        </footer>
    </div>

}