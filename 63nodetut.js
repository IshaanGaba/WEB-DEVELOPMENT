// console.log("hello world");
// console.log("hello world");

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
//   res.end('Hello World this is ishaan');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Basic Grid</title>
      <style>
          .container{
              display: grid;
              grid-template-columns: 100px auto 100px auto;
              /* grid-template-columns: 1fr 2fr 3fr 4fr; */
              grid-gap: 5rem;
          }
          .item{
              background-color: black;
              color: wheat;
              border: 2px solid red;
              padding: 5px 10px;
              margin:3px;
          }
      </style>
  </head>
  <body>
      <div class="container">
          <div class="item">This is item-1</div>
          <div class="item">This is item-2</div>
          <div class="item">This is item-3</div>
          <div class="item">This is item-4</div>
          <div class="item">This is item-5</div>
          <div class="item">This is item-6</div>
          <div class="item">This is item-7</div>
          <div class="item">This is item-8</div>
          <div class="item">This is item-9</div>
          <div class="item">This is item-10</div>
          <div class="item">This is item-10</div>
          <div class="item">This is item-10</div>
      </div>
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});