const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('CI/CD Pipeline working! 🚀');
});

app.get('/health', (req, res) => {
  res.send('OK');
});

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});

