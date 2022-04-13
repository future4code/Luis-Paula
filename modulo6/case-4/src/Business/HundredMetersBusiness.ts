import { CompetitionDataBase } from '../Data/CompetitionDataBase';
import { CustomError } from '../Error/CustomError';
import { IdGenerator } from '../Services/IdGenerator';

export class HundredMetersBusiness {
  constructor(
    private idGenerator: IdGenerator,
    private CompetitionDB: CompetitionDataBase
  ) {}

  public async competitorsList() {
    try {
      const list = await this.CompetitionDB.list100M();

      if (!list) {
        throw new CustomError('Bad Request', 400);
      }

      return list;
    } catch (error) {
      if (error instanceof CustomError) {
        throw new CustomError(error.message, error.code);
      }
    }
  }
}
