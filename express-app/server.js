let data = [
  { "uid": "10f4dc3d89bb", "name": "Ali Gator" },
  { "uid": "b16f63101776", "name": "Sue Permann" },
  { "uid": "337e39bccc6d", "name": "Rose Gardner" },
  { "uid": "ee7cd570992d", "name": "Macon Paine" },
  { "uid": "e2cae1a21b70", "name": "Wanda Rinn" }
];

const express = require('express');
const morgan = require('morgan');
const uniqid = require("uniqid");

const PORT = 8080;
const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.get("/api/names", (req, res) => {
  res.json(data);
});

app.post("/api/names", (req, res) => {
  console.log(req.body);
  const uid = uniqid();
  const friend = { ...req.body, uid };
  data.push(friend);
  res.send(friend);
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
