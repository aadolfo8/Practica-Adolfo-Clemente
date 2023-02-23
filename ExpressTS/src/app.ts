import express, {Application}  from 'express';
import * as dotenv from "dotenv";
import router from './router';
import {testConnection} from './database';
import cors from 'cors';



const SETTINGS: dotenv.DotenvConfigOutput = dotenv.config();
const app: Application = express();

// database
testConnection();

// settings
app.set('port', process.env.PORT);
app.set('config', SETTINGS.parsed );
app.locals.config = app.get('config');

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:  false}));

// routes
app.use(router);


export default app;