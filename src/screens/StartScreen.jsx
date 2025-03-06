import Header from "../components/Header";
import Footer from "../components/Footer";

export default function StartScreen({ onStart, difficulties }) {
  return (
    <div className="home-screen">
      <Header />
      <h1>Welcome to Spirit Parade Memory!</h1>
      <p>Select your difficulty:</p>
      <div className="difficulty-btn-group">
        {difficulties.map(([level, { cardCount }]) => (
          <button key={level} onClick={() => onStart(level)}>
            {level[0].toUpperCase() + level.slice(1)} ({cardCount} cards)
          </button>
        ))}
      </div>
      <button className="start-btn">Start</button>
      <Footer />
    </div>
  );
}
