import express from 'express';
import mysql from 'mysql';
import path from 'path';
import cors from 'cors';

const connection = mysql.createConnection({
  host: 'rightstuff.cvojhsq84htk.us-east-2.rds.amazonaws.com',
  user: 'rightstuff',
  password: 'servicepony',
  database: 'rightbar',
});

const app = express();
app.use(express.json());
// app.use(express.static('dist'));
// app.use('/song/:songID');
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, '/dist')));
app.use('/song/:songID', express.static(path.join(__dirname, '/dist')));

app.use(cors());
// static server here for dist files in production...

// endpoints

// api/users
app.get('/api/users', (req, res) => {
  // do a SELECT * from the database
  connection.query('select * from users', (err, dbres) => {
    if (err) {
      res.json(err);
    }
    res.json(dbres);
  });
});

// api/songs
app.get('/api/songs', (req, res) => {
  // do a SELECT * from the database
  connection.query('select * from songs', (err, dbres) => {
    if (err) {
      res.json(err);
    }
    res.json(dbres);
  });
});

// api/playlists
app.get('/api/playlists', (req, res) => {
  // do a SELECT * from the database
  connection.query('select * from playlists', (err, dbres) => {
    if (err) {
      res.json(err);
    }
    res.json(dbres);
  });
});

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
