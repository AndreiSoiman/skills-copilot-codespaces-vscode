// Create web server

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

// Create a comment
app.post('/comment', (req, res) => {
  const { comment } = req.body;
  if (!comment) {
    return res.status(400).send('Bad Request: Comment is required');
  }
  return res.send(`Comment created: ${comment}`);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});