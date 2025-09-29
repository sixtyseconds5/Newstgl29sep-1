// api/leaderboard.js
export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
  res.status(200).json({
    frame: {
      version: "0.0.0",
      image: "https://snakes-ledders.vercel.app/splash.png",
      buttons: [
        { label: "🎲 Play", action: "post", target: "https://snakes-ledders.vercel.app/api/frame" },
        { label: "🌐 Full Game", action: "link", target: "https://snakes-ledders.vercel.app/game" }
      ]
    },
    data: [
      { username: "Alice", points: 120 },
      { username: "Bob", points: 110 }
    ]
  });
}
