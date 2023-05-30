const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

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

// app.get('/sound/:name', (req, res) => {
//   const { name } = req.params;
//   console.log({ name });
//   /*const p = req.params;
//   const name = p;
//   console.log(p.name);*/
//   // const p = req.params;
//   // p.name
//   if (name === "dog") {
//     res.send("멍멍")
//   } else if (name === "cat") {
//     res.send("야옹")
//   } else if (name === "pig") {
//     res.send("꿀꿀")
//   } else {
//     res.send("retry")
//   }
// })

app.listen(port, () => {
  console.log(`Contact Port ${port}`);
})