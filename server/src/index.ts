import express from 'express';

const app = express();
const port = 3000;


app.get('/', (req, res) => {
  // Send a response to the client
  res.send('Hello, TypeScript + Node.js + Express!');
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});