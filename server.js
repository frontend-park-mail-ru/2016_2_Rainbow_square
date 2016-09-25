 const express = require('express');
  const parser = require('body-parser');

  const app = express();
  const technoDoc = require('techno-gendoc');

  const technolibs = require('technolibs');

  app.use('/', express.static('public'));
  technoDoc.generate(require('./api'), 'public');

  app.use(parser.json());
  app.use('/libs', express.static('node_modules'));

  app.post('/api/messages', (req, res) => {
    technolibs.publish(req.body).then(body => res.json(req.body));
  });

  app.get('/api/messages', (req, res) => {
    res.send([
      technoDoc.mock(require('./api/scheme/Message')),
      technoDoc.mock(require('./api/scheme/Message')),
      technoDoc.mock(require('./api/scheme/Message')),
      technoDoc.mock(require('./api/scheme/Message')),
    ]);
  });

  const requestCountMap = new Map();
  app.post('/users', (req, res) => {
    console.log(req.body);
    const email = req.body.email;
    let count = 1;
    if (requestCountMap.has(email)) {
      count = requestCountMap.get(email) + 1;
    }

    requestCountMap.set(email, count);
    res.send(count.toString());
  });

  app.listen(process.env.PORT || 3000, () => {
    console.log(`App started on port ${process.env.PORT || 3000}`);
  });
