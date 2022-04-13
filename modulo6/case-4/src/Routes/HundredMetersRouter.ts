import express from 'express';
import { HundredMetersController } from '../Controller/HundredMetersController';

export const HundredMetersRouter = express.Router();

const hundredMController = new HundredMetersController();

HundredMetersRouter.get('/100m', hundredMController.competitorsList);
HundredMetersRouter.get('/winner', hundredMController.competitionWinner);
HundredMetersRouter.post('/add', hundredMController.addAthlete);
