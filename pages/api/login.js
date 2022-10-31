export default function handler(req, res) {
  if (req.method == "POST") {
    if (req.body["username"] == "janice" && req.body["password"] == "123") res.status(200).json({ status: true });
    else res.status(200).json({ status: false });
  }
}
