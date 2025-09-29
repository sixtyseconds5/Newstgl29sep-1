import React, { useState } from "react";

export default function App() {
  const [pos, setPos] = useState(1);
  const [dice, setDice] = useState(null);
  const SIZE = 30;

  const roll = () => {
    const r = Math.floor(Math.random() * 6) + 1;
    setDice(r);
    let next = pos + r;
    if (next > SIZE) next = SIZE;
    setPos(next);
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>🐍 Crypto Snakes & Ladders</h1>
      <p>Dice: {dice ?? "-"}</p>
      <p>Position: {pos}</p>
      {pos < SIZE ? (
        <button onClick={roll}>Roll Dice</button>
      ) : (
        <p>🏆 You Win!</p>
      )}
    </div>
  );
}
