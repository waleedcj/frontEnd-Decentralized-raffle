// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
//this is for an http get or post req

export default function handler(req, res) {
  res.status(200).json({ name: "John Doe" });
}
