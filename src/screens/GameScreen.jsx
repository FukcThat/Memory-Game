import Header from "../components/Header";
import Footer from "../components/Footer";
import GameBoard from "../components/GameBoard";
import GameWonModal from "../components/GameWonModal";
import GameLostModal from "../components/GameLostModal";
import { useState } from "react";
import { motion } from "framer-motion";
import "/src/styles/GameScreen.css";

export default function GameScreen({
  gameState,
  onGameOver,
  onTryAgain,
  onNextLevel,
  onHome,
  difficulty,
  score,
  setScore,
  highScore,
  setHighScore,
}) {
  const [clickedCards, setClickedCards] = useState([]);

  return (
    <>
      <div className="game-screen">
        <Header />

        <motion.div
          className="score-container"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 0.3 }}
        >
          <h3>Score: {score}</h3>
          <h3>High Score: {highScore}</h3>
        </motion.div>

        <GameBoard
          onGameOver={onGameOver}
          difficulty={difficulty}
          score={score}
          setScore={setScore}
          highScore={highScore}
          setHighScore={setHighScore}
          clickedCards={clickedCards}
          setClickedCards={setClickedCards}
          gameState={gameState}
        />

        {gameState === "won" && (
          <GameWonModal onNextLevel={onNextLevel} onHome={onHome} />
        )}
        {gameState === "lost" && (
          <GameLostModal onTryAgain={onTryAgain} onHome={onHome} />
        )}
        <Footer />
      </div>
    </>
  );
}
