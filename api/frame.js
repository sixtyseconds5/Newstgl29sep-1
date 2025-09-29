// api/frame.js
export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
  const roll = Math.floor(Math.random() * 6) + 1;
  res.status(200).json({
    frame: {
      version: "0.0.0",
      image: `https://snakes-ledders.vercel.app/assets/dice-${roll}.png`,
      buttons: [
        { label: "🎲 Roll Again", action: "post", target: "https://snakes-ledders.vercel.app/api/frame" },
        { label: "🏆 Leaderboard", action: "post", target: "https://snakes-ledders.vercel.app/api/leaderboard" },
        { label: "🌐 Play Full Game", action: "link", target: "https://snakes-ledders.vercel.app/game" }
      ]
    }
  });
}
