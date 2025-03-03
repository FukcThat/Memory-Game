import "./styles/App.css";
import GameBoard from "./components/GameBoard";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const handleGameOver = () => {
    alert("Game over!");
  };

  return (
    <>
      <Header />
      <GameBoard onGameOver={handleGameOver} />
      <Footer />
    </>
  );
}

export default App;
