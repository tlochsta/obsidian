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

const ez = new Easyviolet({
  server: server
});
const server = app.listen(1234, () => console.log(`Obsidian is running on port ${server.address().port}`));
ez.httpServer(server);
