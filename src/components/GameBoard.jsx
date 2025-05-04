import React, { useState, useEffect } from "react";
import Card from "./Card";
import { initialCharacters } from "../data/characters";
import "/src/styles/GameBoard.css";
import { motion, AnimatePresence } from "framer-motion";

function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

function getRandomGif(character) {
  return character.gifOptions[
    Math.floor(Math.random() * character.gifOptions.length)
  ];
}

export default function GameBoard({
  onGameOver,
  difficulty,
  score,
  setScore,
  highScore,
  setHighScore,
  clickedCards,
  setClickedCards,
  gameState,
}) {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const preparedCards = shuffleArray(initialCharacters)
      .slice(0, difficulty)
      .map((char) => ({
        ...char,
        gif: getRandomGif(char),
        uniqueId: `${char.id}-${Date.now()}-${Math.random()}`,
      }));
    setCards(preparedCards);
    setClickedCards([]);
  }, [difficulty]);

  useEffect(() => {
    if (cards.length > 0 && clickedCards.length === cards.length) {
      onGameOver("won");
    }
  }, [clickedCards, cards]);

  const handleCardClick = (id) => {
    if (gameState !== "playing") return;

    if (clickedCards.includes(id)) {
      onGameOver("lost");
    } else {
      console.log(
        "card keys before:",
        cards.map((c) => c.id + c.gif)
      );

      setClickedCards([...clickedCards, id]);

      setScore(score + 1);

      if (score + 1 > highScore) {
        setHighScore(score + 1);
      }

      setTimeout(() => {
        const reshuffled = shuffleArray(cards).map((card) => ({
          ...card,
          uniqueId: crypto.randomUUID(),
        }));
        setCards(reshuffled);
      }, 200);

      console.log(
        "card keys after shuffle:",
        cards.map((c) => c.id + c.gif)
      );
    }
  };

  return (
    <div className={`game-board ${gameState !== "playing" ? "game-over" : ""}`}>
      <AnimatePresence mode="sync">
        {cards.map((card) => (
          <motion.div
            key={card.uniqueId}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <Card key={card.id} character={card} onClick={handleCardClick} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
