const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes')

const cors = require('cors');

const app = express();

mongoose.connect('mongodb://bruno:omnistack@heineken-shard-00-00-mlhas.mongodb.net:27017,heineken-shard-00-01-mlhas.mongodb.net:27017,heineken-shard-00-02-mlhas.mongodb.net:27017/week10?ssl=true&replicaSet=Heineken-shard-0&authSource=admin&retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
