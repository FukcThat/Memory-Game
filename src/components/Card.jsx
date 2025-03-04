import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import "/src/styles/Card.css";

export default function Card({ character, onClick }) {
  return (
    <Tilt
      glareEnable={true}
      glareMaxOpacity={0.3}
      glareColor="#ffffff"
      glarePosition="bottom"
      className="tilt"
      style={{
        borderRadius: "1rem",
        overflow: "hidden",
      }}
    >
      <motion.div
        className="card"
        onClick={() => onClick(character.id)}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.img
          src={character.gif}
          alt={character.name}
          className="card-image"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
        <div className="card-name">{character.name}</div>
      </motion.div>
    </Tilt>
  );
}
