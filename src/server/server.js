import http from 'http';

export function createServer(app, port) {
  const server = http.createServer(app);
  server.listen(port);
  console.log('Server running at', port);

  return server;
}