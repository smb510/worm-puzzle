"use client";

import Link from "next/link"
import { useState } from 'react'

export default function Guess({ answer, onGuessCorrect, onGuessIncorrect }: { answer: string, onGuessCorrect: () => void, onGuessIncorrect: () => void }) {

    const [currentGuess, setCurrentGuess] = useState("");

    function updateInput(newValue: string) {
        setCurrentGuess(newValue)
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