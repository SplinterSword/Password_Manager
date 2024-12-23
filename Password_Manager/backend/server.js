const express = require('express')
const { MongoClient } = require('mongodb');
const dotenv = require('dotenv')
const cors = require('cors')
const bodyparser = require('body-parser')

dotenv.config()

const url = 'mongodb+srv://sparshj2003:cC509958@splintercluster.5cfj7.mongodb.net/?retryWrites=true&w=majority&appName=SplinterCluster';
const client = new MongoClient(url);

const dbName = 'passop';
const app = express()
const port = 3000
app.use(bodyparser.json())
app.use(cors())

client.connect();

// Get all the passwords
app.get('/', async (req, res) => {
    const db = client.db(dbName);
    const collection = db.collection('passwords');
    const findResult = await collection.find({}).toArray();
    res.json(findResult);
})

// Save a password
app.post('/', async (req, res) => {
    const password = req.body
    const db = client.db(dbName);
    const collection = db.collection('passwords');
    const findResults = await collection.insertOne(password);
    res.send({success: true, result: findResults});
})

// Delete a password
app.delete('/', async (req, res) => {
    const password = req.body
    const db = client.db(dbName);
    const collection = db.collection('passwords');
    const findResults = await collection.deleteOne(password);
    res.send({success: true, result: findResults});
})

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})