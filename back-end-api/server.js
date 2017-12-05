var restify = require('restify');
var server = restify.createServer();
var listenPort = process.env.PORT || 9999;
var corsMiddleware = require('restify-cors-middleware');
var players = require(__dirname + '/players');

var cors = corsMiddleware({
	origins: ['http://localhost:3000'],
	allowHeaders: ['API-Token'],
	exposeHeaders: ['API-Token-Expiry'],
});

server.pre(cors.preflight);
server.use(cors.actual);

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

server.get('/players', function(req, res, next) {
	res.send(players);
	next();
});

server.listen(listenPort, function() {
	console.log('%s listening at %s', server.name, server.url);
});
