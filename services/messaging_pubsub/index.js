import express, {json} from 'express';
import bodyParser from 'body-parser';
import * as dotenv from 'dotenv';
import cors from 'cors';
import {PubSub} from '@google-cloud/pubsub';

// # TODO: Split mainnet and test new. Create Staging, Testing and Production Environments.

const pubsub = new PubSub({projectId: ''});
dotenv.config();
const app = express();

app.use(
  cors({
    origin: '*',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);
app.use(bodyParser.json());

app.get('/', async (req, res) => {
  res.send('Welcome to my service. Service is running successfully.');
});


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(
    `Hello from Cloud Run! The container started successfully and is listening for HTTP requests on ${PORT}`
  );
});
