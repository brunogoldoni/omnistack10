const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');

const routes = require('./routes')
const { setupWebsocket } = require('./websocket')

const app = express();
const server = http.Server(app);

setupWebsocket(server);

mongoose.connect('mongodb://bruno:omnistack@heineken-shard-00-00-mlhas.mongodb.net:27017,heineken-shard-00-01-mlhas.mongodb.net:27017,heineken-shard-00-02-mlhas.mongodb.net:27017/week10?ssl=true&replicaSet=Heineken-shard-0&authSource=admin&retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);
