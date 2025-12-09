import http from 'node:http';

http
  .createServer((request, response) => {
    if (request.method === 'POST' || request.url === '/echo') {
      request.pipe(response);
    } else {
      response.statusCode = 404;
      response.end();
    }
  })
  .listen(8080, "127.0.0.1");