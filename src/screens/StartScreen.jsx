import Header from "../components/Header";
import Footer from "../components/Footer";
import "/src/styles/StartScreen.css";

export default function StartScreen({ onStart, difficulties }) {
  return (
    <div className="start-screen">
      <Header />
      <h1>Welcome to Spirit Parade Memory!</h1>
      <p>Select your difficulty:</p>
      <div className="difficulty-btn-group">
        {difficulties.map(([level]) => (
          <button
            className="difficulty-btn"
            key={level}
            onClick={() => onStart(level)}
          >
            {level[0].toUpperCase() + level.slice(1)}
          </button>
        ))}
      </div>
      <Footer />
    </div>
  );
}
