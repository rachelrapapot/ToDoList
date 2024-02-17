const express = require('express');
const app = express();

app.get('/apps', (req, res) => {
  const render = require('render-api');
  const client = new render.Client({
    apiKey: 'rnd_IL3adwaDuoi2Tq9E3KbK5yL1YxPL',
  });

  client.services.list().then((services) => {
    res.json(services);
  });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
