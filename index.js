import Easyviolet from 'easyviolet';
import http from 'node:http';
import express from 'express';

const server = http.createServer();
const app = express();


app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get('/', (req, res) => {
  res.render('index');
});

new Easyviolet({
  server: server
});

server.listen(8080, () => {
  console.log(`Your easyviolet demo is running on port ${server.address().port}`);
});
