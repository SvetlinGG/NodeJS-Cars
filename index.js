const http = require('http');
const indexTemplate = require('./views/home/index.html');
const siteCss = require('./content/styles/site.css');

const port = 3000;



const server = http.createServer((req, res) => {

    if ( req.url === '/styles/site.css'){
        res.writeHead(200, {
            'content-type': 'text/css',
        });
        res.write(siteCss);
        return res.end();
    }

    res.end();
});

server.listen(port);
console.log(`Server is listening on http://localhost:${port}...`);
