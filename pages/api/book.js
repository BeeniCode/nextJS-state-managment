export default function handler(req, res) {
  res
    .status(200)
    .json({ title: "The fault in our stars", author: "John Green" });
}
