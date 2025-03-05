export default function GameWonModal({ onNextLevel, onHome }) {
  return (
    <div className="modal">
      <img src="/assets/victory.png" alt="You Won!" />
      <h2>You won! Ready for the next challenge?</h2>
      <button onClick={onNextLevel}>Next Level</button>
      <button onClick={onHome}>Back to Home</button>
    </div>
  );
}
