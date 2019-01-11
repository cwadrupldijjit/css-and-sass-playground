const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(helmet());

app.use(express.static(__dirname + '/dist'));

app.get('/*', (req, res) => {
    res.sendFile('index.html', { root: __dirname + '/dist' });
});

app.listen(8600);
