import { Request, Response } from 'express';
import { HundredMetersBusiness } from '../Business/HundredMetersBusiness';
import { CompetitionDataBase } from '../Data/CompetitionDataBase';
import { IdGenerator } from '../Services/IdGenerator';

const businessDB = new HundredMetersBusiness(
  new IdGenerator(),
  new CompetitionDataBase()
);
export class HundredMetersController {
  public async competitorsList(req: Request, res: Response) {
    try {
      const result = await businessDB.competitorsList();

      res.status(200).send({ result });
    } catch (error: any) {
      res.status(400).send({ error: error.message });
    }
  }
}
