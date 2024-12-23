"use client";
import React from "react"
import { AppContext } from "./App"
import { Button, Link } from "@mui/material"

function GameOver() {
  const { gameOver, currAttempt, correctWord } = React.useContext(AppContext)
  return (
    <div className="gameOver">
      <h3>{gameOver.guessedWord ? "You correctly guessed" : "You failed"}</h3>
      {gameOver.guessedWord ? (
        <h3>You guessed in {currAttempt.attempt} attempts</h3>
      ) : (
        <h3>Reload the page to try again.</h3>
      )}
      { gameOver.guessedWord &&
      <Button>
      <Link href="/two">Onward</Link>
      </Button>}
    </div>
  )
}

export default GameOver