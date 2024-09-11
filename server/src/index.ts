import express from 'express';
import dbConnectionConfig from './config/dbconfig';

const app = express();
const port = 3000;


app.get('/', (req, res) => {
  // Send a response to the client
  res.send('Hello, TypeScript + Node.js + Express!');
});


app.listen(port, async () => {
  console.log(`Server is running on http://localhost:${port}`);
  await dbConnectionConfig();
});