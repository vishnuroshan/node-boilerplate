const app = require('./app');
const http = require('http');
const port = process.env.PORT || 8000;
const http_server = http.createServer(app);
http_server.on('request', app);
http_server.listen(port, function() {
	console.log(
		'Listening on ' +
			http_server.address().address +
			':' +
			http_server.address().port
	);
});
