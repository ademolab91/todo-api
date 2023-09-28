const server = Bun.serve({
  port: 3000,
  fetch(req) {
    console.dir()
    return new Response(`Hello world`);
  },
});

console.log(`Listening on localhost:${server.port}`);
