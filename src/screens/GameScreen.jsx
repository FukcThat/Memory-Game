import Header from "../components/Header";
import Footer from "../components/Footer";
import GameBoard from "../components/GameBoard";
import GameWonModal from "../components/GameWonModal";
import GameLostModal from "../components/GameLostModal";

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
  console.log("GameScreen rendered with gameState:", gameState);

  return (
    <>
      <div className="game-screen">
        <Header />
        <GameBoard
          onGameOver={onGameOver}
          difficulty={difficulty}
          score={score}
          setScore={setScore}
          highScore={highScore}
          setHighScore={setHighScore}
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
