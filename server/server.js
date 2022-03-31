require('dotenv').config();
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3001;
const path = require('path');
const routes = require('./routes');
const db = require('./config/connection');
const cors = require('cors')

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api', routes);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

db.once('open', () => console.log('connected to Database'));
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})