import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

export default function Card({ character, onClick }) {
  return (
    <Tilt
      glareEnable={true}
      glareMaxOpacity={0.3}
      glareColor="#ffffff"
      glarePosition="bottom"
      className="tilt"
    >
      <motion.div
        className="card"
        onClick={() => onClick(character.id)}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05 }}
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
