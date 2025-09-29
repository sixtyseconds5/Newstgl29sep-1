export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const roll = Math.floor(Math.random() * 6) + 1;

  res.setHeader("Content-Type", "application/json");
  res.status(200).json({
    frame: {
      version: "0.0.0",
      image: `https://newstgl29sep-1.vercel.app/assets/dice-${roll}.png`,
      buttons: [
        {
          label: "🎲 Roll Again",
          action: "post",
          target: "https://newstgl29sep-1.vercel.app/api/frame"
        },
        {
          label: "🌐 Play Full Game",
          action: "link",
          target: "https://newstgl29sep-1.vercel.app/game"
        }
      ]
    }
  });
}
