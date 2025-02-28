import Header from "../components/Header";
import Footer from "../components/Footer";

export default function StartScreen() {
  return (
    <>
      <Header />
      {/* Difficulty Selection */}
      <button className="start-btn">Start</button>
      <Footer />
    </>
  );
}
