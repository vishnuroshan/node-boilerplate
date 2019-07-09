const app = require('./express');
const bodyParser = require('body-parser');
const fs = require('fs');
const Welcome_html = fs.readFileSync('index.html');
app.use(bodyParser.json({ type: '*/*' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', function(req, res) {
	res.writeHead(200, {
		'Content-Type': 'text/html'
	});
	res.end(Welcome_html);
});

module.exports = app;
