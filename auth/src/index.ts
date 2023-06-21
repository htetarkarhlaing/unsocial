import 'dotenv/config';
import express, { Application } from 'express';

const PORT = process.env.PORT || 3000;

const app: Application = express();

app.get('*', (req, res) => {
  res.send({});
});

app.listen(PORT, () => {
  console.log(`Auth service is running on http://localhost:${PORT}`);
});
