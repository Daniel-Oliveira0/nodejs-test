const http = require('http');const { text } = require('stream/consumers');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain');

    if(req.url === '/'){
        res.statusCode = 200;
        res.end('Home page');
    } else if(req.url === '/about'){
        res.statusCode === 200;
        res.end('About page');
    }
})

server.listen(3000, () => {
    console.log('Servidor em execução em http://localhost:3000');    
})