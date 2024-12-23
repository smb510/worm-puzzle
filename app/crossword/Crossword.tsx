import Crossword from '@jaredreisinger/react-crossword';

const data = {
    across: {
        1: {
            clue: "Reindeer #6",
            answer: "CUPID",
            row: 0,
            col: 3
        },
        3: {
            clue: "Reindeer #4",
            answer: "VIXEN",
            row: 2,
            col: 2
        },
        5: {
            clue: "Reindeer #7, or a party of 5... wait no, 4, and we're not hungry anymore",
            answer: "DONNER",
            row: 4,
            col: 0
        },
        6: {
            clue: "In song, make this gay, and all your troubles will be miles away",
            answer: "YULETIDE",
            row: 6,
            col: 3
        },
        8: {
            clue: "Reindeer #5",
            answer: "COMET",
            row: 9,
            col: 3,
        }
    },
    down: {
        1: {
            clue: "A tight squeeze in the night for a jolly fellow?",
            answer: "CHIMNEY",
            row: 0,
            col: 3
        },
        2: {
            clue: "No room here, but maybe out back?",
            answer: "INN",
            row: 0,
            col: 6,
        },
        4: {
            clue: "Prickly plant with bright red berries",
            answer: "HOLLY",
            row: 3,
            col: 1
        },
        7: {
            clue: "Little helpers?",
            answer: "ELVES",
            row: 6,
            col: 6
        }

    }
}

export default function CrosswordPuzzle({ completionListener }: { completionListener: (isCorrect: boolean) => void }) {
    return <Crossword data={data} onCrosswordComplete={completionListener} />
}