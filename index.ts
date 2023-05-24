import express from 'express';
import { MongoClient } from 'mongodb';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

const url = 'mongodb://localhost:27017';
const dbName = 'mongo-test';

MongoClient.connect(url, (err, client) => {
  if (err) {
    console.error('Error connecting to MongoDB', err);
    return;
  }

  console.log('Connected to the DB');

  const db = client.db(dbName);

  app.get('/data', (req, res) => {
    const collection = db.collection('test-collection'); // Specify your MongoDB collection name

    collection.find().toArray((err, data) => {
      if (err) {
        console.error('Error retrieving data from MongoDB:', err);
        res.status(500).send('Internal Server Error');
        return;
      }

      res.json(data);
    });
  });

  db.collection('collection-2').insertOne({
    name: 'Submarine',
    age: '10',
    class: 'ohio',
  });

  client.close();
});

  