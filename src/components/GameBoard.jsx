import React, { useState, useEffect } from "react";
import Card from "./Card";
import { initialCharacters } from "../data/characters";

function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

function getRandomGif(character) {
  return character.gifOptions[
    Math.floor(Math.random() * character.gifOptions.length)
  ];
}

export default function GameBoard({ onGameOver }) {
  const [cards, setCards] = useState([]);
  const [clickedCards, setClickedCards] = useState([]);

  useEffect(() => {
    const preparedCards = initialCharacters.map((char) => ({
      ...char,
      gif: getRandomGif(char),
    }));
    setCards(shuffleArray(preparedCards));
  }, []);

  const handleCardClick = (id) => {
    if (clickedCards.includes(id)) {
      onGameOver();
    } else {
      setClickedCards([...clickedCards, id]);
      setCards(shuffleArray(cards));
    }
  };

  return (
    <div className="game-board">
      {cards.map((card) => (
        <Card key={card.id} character={card} onClick={handleCardClick} />
      ))}
    </div>
  );
}
