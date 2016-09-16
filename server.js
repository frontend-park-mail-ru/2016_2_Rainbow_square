let express = require('express');
let parser = require('body-parser');
let app = express();
let technoDoc = require('techno-gendoc');
let path = require('path');

let technolibs = require('technolibs');

app.use('/', express.static('public'));
technoDoc.generate(require('./api'), 'public');

app.use(parser.json());
app.use('/libs', express.static('node_modules'));

app.post('/api/messages', (req, res) => {
	technolibs.publish(req.body).then(body => res.json(req.body));
});

app.get('/api/messages', function (req, res) {
	res.send([
		technoDoc.mock(require('./api/scheme/Message')),
		technoDoc.mock(require('./api/scheme/Message')),
		technoDoc.mock(require('./api/scheme/Message')),
		technoDoc.mock(require('./api/scheme/Message'))
	])
});

let requestCountMap = new Map();
app.post('/users', (req, res) => {
	console.log(req.body);
	var email = req.body.email;
	var count = 1;
	if (requestCountMap.has(email)) {
		count = requestCountMap.get(email) + 1;
	}
	requestCountMap.set(email, count);
	res.send(count.toString());
});

app.listen(process.env.PORT || 3000, () => {
	console.log(`App started on port ${process.env.PORT || 3000}`);
});
