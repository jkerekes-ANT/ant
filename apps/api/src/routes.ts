import * as express from 'express';
import { wordoraRouter } from './app/wordora';


export const router = express.Router();

router.use('/wordora', wordoraRouter)