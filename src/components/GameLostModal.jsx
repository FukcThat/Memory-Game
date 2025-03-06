export default function GameLostModal({ onTryAgain, onHome }) {
  return (
    <div className="modal">
      <img src="/assets/game-over.png" alt="You Lost" />
      <h2>Oh no! You clicked the same spirit twice!</h2>
      <button onClick={onTryAgain}>Try Again</button>
      <button onClick={onHome}>Back to Home</button>
    </div>
  );
}
