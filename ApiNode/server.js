const express = require('express');
const app = express();

app.get('/apps', (req, res) => {
  const render = require('render-api');
  const client = new render.Client({
    apiKey: 'rnd_x170p3ha7KrLuADeDlA7CeW6KMSG',
  });

  client.services.list().then((services) => {
    res.json(services);
  });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
[
  {
    "cursor": "kuwAa3JFU1xxM29jbWs0YzczOXF0cWNn",
    "service": {
      "id": "srv-cn8gq3ocmk4c739qtqcg",
      "autoDeploy": "yes",
      "branch": "main",
      "buildFilter": null,
      "createdAt": "2024-02-17T19:46:23.600328Z",
      "name": "TodoApi",
      "notifyOnFail": "default",
      "ownerId": "usr-cn6j4oicn0vc73ddobgg",
      "repo": "https://github.com/rachelrapapot/ToDoList",
      "rootDir": "./TodoApi",
      "slug": "todoapi-67w8",
      "suspended": "not_suspended",
      "suspenders": [],
      "type": "web_service",
      "updatedAt": "2024-02-17T21:55:08.870325Z",
      "serviceDetails": {
        "buildPlan": "starter",
        "disk": null,
        "env": "docker",
        "envSpecificDetails": {
          "dockerCommand": "",
          "dockerContext": ".",
          "dockerfilePath": "Dockerfile"
        },
        "healthCheckPath": "",
        "numInstances": 1,
        "openPorts": null,
        "parentServer": null,
        "plan": "free",
        "pullRequestPreviewsEnabled": "no",
        "region": "singapore",
        "url": "https://todoapi-67w8.onrender.com"
      }
    }
  },
  {
    "cursor": "TkgiHwxBBCpibGVuN2Y1czczZW4xdTkw",
    "service": {
      "id": "srv-cn6jblen7f5s73en1u90",
      "autoDeploy": "yes",
      "branch": "main",
      "buildFilter": null,
      "createdAt": "2024-02-14T21:51:17.538311Z",
      "name": "AuthClient",
      "notifyOnFail": "default",
      "ownerId": "usr-cn6j4oicn0vc73ddobgg",
      "repo": "https://github.com/rachelrapapot/ToDoList",
      "rootDir": "./ToDoList",
      "slug": "authclient-ilwo",
      "suspended": "not_suspended",
      "suspenders": [],
      "type": "static_site",
      "updatedAt": "2024-02-17T21:55:35.24891Z",
      "serviceDetails": {
        "buildCommand": "npm run build",
        "buildPlan": "starter",
        "parentServer": null,
        "publishPath": "build",
        "pullRequestPreviewsEnabled": "no",
        "url": "https://authclient-ilwo.onrender.com"
      }
    }
  }
]