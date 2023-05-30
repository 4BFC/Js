const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

const corsOptions = {
  origin: 'http://127.0.0.1:5501'
};

app.use(cors(corsOptions));

app.get('/', (req, res) => {
  res.send(`Hello!:Port:${port}!!`);
})

app.get('/sound/:name', (req, res) => {
  const { name } = req.params;
  // const p = req.params;
  // p.name
  if (name == "dog") {
    res.json({ 'sound': '멍멍' })
  } else if (name == "cat") {
    res.json({ 'sound': '야옹' })
  } else if (name == "pig") {
    res.json({ 'sound': '꿀꿀' })
  } else {
    res.json({ 'sound': 'unknown' })
  }
})

app.listen(port, () => {
  console.log(`Contact Port ${port}`);
})
