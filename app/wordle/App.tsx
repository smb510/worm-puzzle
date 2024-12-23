"use client";
import {
    createContext,
    Dispatch,
    SetStateAction,
    useEffect,
    useState,
  } from "react"
  
  import "./App.css"
  
  import {
    boardDefault,
    boardStatusDefault,
    computeGuessStatus,
    generateAcceptableWordSet,
    LetterStatus,
  } from "./helpers"
  import Board from "./Board"
  import Keyboard from "./Keyboard"
  import GameOver from "./GameOver"
  
  export interface IWordleGameContext {
    board: string[][]
    setBoard: Dispatch<SetStateAction<string[][]>>
    boardStatus: LetterStatus[][]
    setBoardStatus: Dispatch<SetStateAction<LetterStatus[][]>>
    currAttempt: { attempt: number; letterPos: number }
    setCurrAttempt: Dispatch<
      SetStateAction<{ attempt: number; letterPos: number }>
    >
    onDelete: () => void
    onEnter: () => void
    onSelectLetter: (key: string) => void
    correctWord: string
    letterStatus: Map<string, LetterStatus>
    setLetterStatus: Dispatch<SetStateAction<Map<string, LetterStatus>>>
    gameOver: { gameOver: boolean; guessedWord: boolean }
    setGameOver: Dispatch<
      SetStateAction<{ gameOver: boolean; guessedWord: boolean }>
    >
  }
  
  export const AppContext = createContext<IWordleGameContext>(
    {} as IWordleGameContext
  )
  
  export default function App({onGameOver}: {onGameOver: (success: boolean) => void}) {
    const [board, setBoard] = useState(boardDefault)
    const [boardStatus, setBoardStatus] = useState(boardStatusDefault)
    const [currAttempt, setCurrAttempt] = useState({
      attempt: 0,
      letterPos: 0,
    })
    const [wordSet, setWordSet] = useState(new Set())
    const [letterStatus, setLetterStatus] = useState(new Map())
    const [gameOver, setGameOver] = useState({
      gameOver: false,
      guessedWord: false,
    })
  
    //const correctWord = "RIGHT";
    const [correctWord, setCorrectWord] = useState("SANTA")
  
    // generate set once (by empty deps)
    useEffect(() => {
      // this is the word bank of acceptable words
      generateAcceptableWordSet().then((words) => {
        console.log(words.wordSet.size + " possible acceptable words");
        setWordSet(words.wordSet)
      })
    }, [])
  
    const onSelectLetter = (key: string) => {
      if (currAttempt.letterPos >= 5) return
      const newBoard = [...board]
      newBoard[currAttempt.attempt][currAttempt.letterPos] = key
      setBoard(newBoard)
      setCurrAttempt({ ...currAttempt, letterPos: currAttempt.letterPos + 1 })
    }
  
    const onDelete = () => {
      if (currAttempt.letterPos === 0) return
      const newBoard = [...board]
      newBoard[currAttempt.attempt][currAttempt.letterPos - 1] = ""
      setBoard(newBoard)
      setCurrAttempt({ ...currAttempt, letterPos: currAttempt.letterPos - 1 })
    }
  
    const onEnter = () => {
      if (currAttempt.letterPos !== 5) return
  
      let currWord = board[currAttempt.attempt].join("").toUpperCase()
      if (!wordSet.has(currWord)) return alert("Word not found")
  
      // compute the status of the letters
      const newBoardStatus = [...boardStatus]
      newBoardStatus[currAttempt.attempt] = computeGuessStatus(
        currWord,
        correctWord
      )
      setBoardStatus(newBoardStatus)
  
      // defining here because it won't be refreshed after the setCurrAttempt
      const nextAttemptCount = currAttempt.attempt + 1
  
      setCurrAttempt({
        attempt: nextAttemptCount,
        letterPos: 0,
      })
  
      if (currWord === correctWord) {
        setGameOver({
          gameOver: true,
          guessedWord: true,
        })
        onGameOver(true);
      } else if (nextAttemptCount === 6) {
        setGameOver({
          gameOver: true,
          guessedWord: false,
        })
        onGameOver(false);
      }
    }
  
    return (
      <div className="App">
        <nav>
          <h1>Wordle</h1>
        </nav>
        <AppContext.Provider
          value={{
            board,
            setBoard,
            boardStatus,
            setBoardStatus,
            currAttempt,
            setCurrAttempt,
            onDelete,
            onEnter,
            onSelectLetter,
            correctWord,
            letterStatus,
            setLetterStatus,
            gameOver,
            setGameOver,
          }}
        >
          <div className="game">
            <Board />
            {gameOver.gameOver ? <GameOver /> : <Keyboard />}
          </div>
        </AppContext.Provider>
      </div>
    )
  }
