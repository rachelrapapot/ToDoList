// const express = require('express');
// const app = express();

// app.get('/apps', (req, res) => {
//   const render = require('render-api');
//   const client = new render.Client({
//     apiKey: 'rnd_x170p3ha7KrLuADeDlA7CeW6KMSG',
//   });

//   client.services.list().then((services) => {
//     res.json(services);
//   });
// });

// app.listen(3000, () => {
//   console.log('Server listening on port 3000');
// });
const sdk = require('api')('@render-api/v1.0#ja8rb1jlsxhh7qu');

sdk.auth('rnd_x170p3ha7KrLuADeDlA7CeW6KMSG');
sdk.getServices({limit: '20'})
  .then(({ data }) => console.log(data))
  .catch(err => console.error(err));