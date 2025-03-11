import "./styles/App.css";
import StartScreen from "./screens/StartScreen";
import GameScreen from "./screens/GameScreen";
import { useState } from "react";

export default function App() {
  const difficulties = {
    easy: { cardCount: 3, next: "medium" },
    medium: { cardCount: 6, next: "hard" },
    hard: { cardCount: 12, next: "hard" },
  };

  const [gameState, setGameState] = useState("start");
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [difficulty, setDifficulty] = useState("easy");
  const [clickedCards, setClickedCards] = useState([]);

  const handleStart = (difficultyLevel) => {
    setDifficulty(difficultyLevel);
    setScore(0);
    setGameState("playing");
  };

  const handleGameEnd = (result) => {
    if (result === "won") {
      setGameState("won");
    } else if (result === "lost") {
      setGameState("lost");
    } else {
      alert("Sorry, something went wrong and I was too lazy to fix it.");
    }
  };

  const handleTryAgain = () => {
    setScore(0);
    setGameState("playing");
    setClickedCards([]);
  };

  const handleNextLevel = () => {
    setScore(0);
    setDifficulty(difficulties[difficulty].next);
    setGameState("playing");
    setClickedCards([]);
  };

  const handleHome = () => {
    setScore(0);
    setHighScore(0);
    setGameState("start");
  };

  return (
    <>
      {gameState === "start" && (
        <StartScreen
          onStart={handleStart}
          difficulties={Object.entries(difficulties)}
        />
      )}
      {["playing", "won", "lost"].includes(gameState) && (
        <GameScreen
          gameState={gameState}
          onGameOver={handleGameEnd}
          onTryAgain={handleTryAgain}
          onNextLevel={handleNextLevel}
          onHome={handleHome}
          difficulty={difficulties[difficulty].cardCount}
          score={score}
          setScore={setScore}
          highScore={highScore}
          setHighScore={setHighScore}
          clickedCards={clickedCards}
          setClickedCards={setClickedCards}
        />
      )}
    </>
  );
}
