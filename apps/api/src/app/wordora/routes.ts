import * as express from 'express';
import { newWordoraGame } from './game';

export const router = express.Router();

router.get('/', newWordoraGame)