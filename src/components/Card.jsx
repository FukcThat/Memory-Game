import Tilt from "react-parallax-tilt";
import "./styles/Card.css";

export default function Card({ character }) {
  return (
    <Tilt
      glareEnable={true}
      glareMaxOpacity={0.4}
      glareColor="#ffffff"
      glarePosition="bottom"
      className="tilt"
    >
      <div className="card">
        <img src={character.gif} alt={character.name} className="card-image" />
        <div className="card-name">{character.name}</div>
      </div>
    </Tilt>
  );
}
