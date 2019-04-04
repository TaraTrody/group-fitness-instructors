import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compress from 'compression';
import cors from 'cors';
import helmet from 'helmet';
import mongoose from 'mongoose';


import config from '../config/config';
import Template from '../../template';
import userRoutes from './routes/user.routes'
import authRoutes from './routes/auth.routes'


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(compress());
app.use(helmet());
app.use(cors());

app.use('/api/v1/', userRoutes)
app.use('/api/v1/', authRoutes)


mongoose.Promise = global.Promise;
mongoose.connect(config.mongoUri);
mongoose.connection.on('error', () => {
  throw new Error(`unable to connect to database: ${config.mongoUri}`);
});

app.get('/', (req, res) => {
  res.status(200).send(Template());
});

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    res.status(401).json({ error: `${err.name}: ${err.message}` });
  }
});

/* eslint-disable no-console */
app.listen(config.port, (err) => {
  if (err) {
    console.log(err);
  }
  console.info('Server started on port %s.', config.port);
});
