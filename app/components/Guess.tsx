"use client";

export default function Guess({ answer, onGuessCorrect, onGuessIncorrect }: { answer: string, onGuessCorrect: () => void, onGuessIncorrect: () => void }) {

    function updateInput(newValue: string) {
        if (answer == newValue) {
            onGuessCorrect();
        } else {
            onGuessIncorrect();
        }
    }

    return (
        <div>
            <input type="text" placeholder="enter guess here..." onInput={(event: React.ChangeEvent<HTMLInputElement>) => updateInput(event.target.value)} />
        </div>
    );

}