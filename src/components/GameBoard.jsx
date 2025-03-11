import React, { useState, useEffect } from "react";
import Card from "./Card";
import { initialCharacters } from "../data/characters";
import "/src/styles/GameBoard.css";

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
}) {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const preparedCards = shuffleArray(initialCharacters)
      .slice(0, difficulty)
      .map((char) => ({
        ...char,
        gif: getRandomGif(char),
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
    if (clickedCards.includes(id)) {
      onGameOver("lost");
    } else {
      setClickedCards([...clickedCards, id]);
      setCards(shuffleArray(cards));
      setScore(score + 1);

      if (score + 1 > highScore) {
        setHighScore(score + 1);
      }
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
