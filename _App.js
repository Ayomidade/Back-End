import http from "http";

const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/home":
      res.writeHead(200, { "content-type": "application/json" });
      res.end(JSON.stringify({ res: "Welcome to home page" }));
      return;
    case "/blogs":
      res.writeHead(200, { "content-type": "application/json" });
      res.end(JSON.stringify({ res: "Welcome to blogs pages" }));
      return;
    default:
      res.writeHead(200, { "content-type": "application/json" });
      res.end(JSON.stringify({ res: "Welcom to default page" }));
      console.log(req);
      return;
  }
});

server.listen(8080, (err) => {
  if (!err) return console.log(`server running on port ${8080}`);
  throw err;
});
