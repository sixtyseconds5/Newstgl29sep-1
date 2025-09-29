export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  res.setHeader("Content-Type", "application/json");
  res.status(200).json({
    frame: {
      version: "0.0.0",
      image: "https://newstgl29sep-1.vercel.app/splash.png",
      buttons: [
        {
          label: "🎲 Play",
          action: "post",
          target: "https://newstgl29sep-1.vercel.app/api/frame"
        },
        {
          label: "🌐 Full Game",
          action: "link",
          target: "https://newstgl29sep-1.vercel.app/game"
        }
      ]
    },
    data: [
      { username: "Alice", points: 120 },
      { username: "Bob", points: 110 },
      { username: "Charlie", points: 90 }
    ]
  });
}
