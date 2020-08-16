/*

Use to test on phone

*/

const express = require('express'),
      app = express();

app.listen(8124, () => {
  console.log('Listening on port 8124');
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/home.html');
});

app.get('/style.css', (req, res) => {
  res.sendFile(__dirname + '/style.css');
});

// get images:
app.get('/:folder/:what', (req, res) => {
  res.sendFile(__dirname + '/' + req.params.folder + '/' + req.params.what)
});
