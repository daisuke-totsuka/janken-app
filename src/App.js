import React, { useState } from "react";

const hands = ["グー", "チョキ", "パー"];

function judge(player, computer) {
  if (player === computer) return "あいこ";
  if (
    (player === "グー" && computer === "チョキ") ||
    (player === "チョキ" && computer === "パー") ||
    (player === "パー" && computer === "グー")
  ) {
    return "勝ち！";
  }
  return "負け…";
}

function App() {
  const [playerHand, setPlayerHand] = useState("");
  const [computerHand, setComputerHand] = useState("");
  const [result, setResult] = useState("");

  const play = (hand) => {
    const comp = hands[Math.floor(Math.random() * 3)];
    setPlayerHand(hand);
    setComputerHand(comp);
    setResult(judge(hand, comp));
  };

  return (
    <div style={{ textAlign: "center", marginTop: 50 }}>
      <h1>じゃんけんゲーム</h1>
      <div>
        {hands.map((hand) => (
          <button
            key={hand}
            onClick={() => play(hand)}
            style={{ margin: 10, fontSize: 24 }}
          >
            {hand}
          </button>
        ))}
      </div>
      {result && (
        <div style={{ marginTop: 30, fontSize: 24 }}>
          <div>あなた：{playerHand}</div>
          <div>コンピュータ：{computerHand}</div>
          <div>結果：{result}</div>
        </div>
      )}
    </div>
  );
}

export default App;
