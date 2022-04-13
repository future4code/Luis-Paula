import { HundredMeters } from '../Model/TypesHundredMeters';
import { Javelin } from '../Model/TypesJavelin';
import { BaseDataBase } from './BaseDataBase';

export class CompetitionDataBase extends BaseDataBase {
  private static TABLE_NAME_1 = 'Competicao_1';
  private static TABLE_NAME_2 = 'Competicao_2';

  public async list100M(): Promise<HundredMeters[]> {
    const result = await this.getConnection()
      .select('*')
      .from(CompetitionDataBase.TABLE_NAME_1);

    return result;
  }

  public async listJavelin(): Promise<Javelin[]> {
    const result = await this.getConnection()
      .select('*')
      .from(CompetitionDataBase.TABLE_NAME_2);

    return result;
  }

  public async addCompetitor100M(
    id: string,
    competicao: string,
    atleta: string,
    value: number,
    unidade: string
  ): Promise<void> {
    try {
      await this.getConnection()
        .insert({ id, competicao, atleta, value, unidade })
        .into(CompetitionDataBase.TABLE_NAME_1);
    } catch (error) {
      console.log(error);
    }
  }

  public async addCompetitorJavelin(
    id: string,
    competicao: string,
    atleta: string,
    value: number,
    unidade: string
  ): Promise<void> {
    try {
      await this.getConnection()
        .insert({ id, competicao, atleta, value, unidade })
        .into(CompetitionDataBase.TABLE_NAME_2);
    } catch (error) {
      console.log(error);
    }
  }

  public async bestTime100M(): Promise<HundredMeters[]> {
    const result = await this.getConnection()
      .select('*')
      .from(CompetitionDataBase.TABLE_NAME_1)
      .where({
        value: this.getConnection()
          .min('value')
          .from(CompetitionDataBase.TABLE_NAME_1),
      });

    return result;
  }

  public async bestTimeJavelin(): Promise<Javelin[]> {
    const result = await this.getConnection()
      .select('*')
      .from(CompetitionDataBase.TABLE_NAME_2)
      .where({
        value: this.getConnection()
          .min('value')
          .from(CompetitionDataBase.TABLE_NAME_2),
      });

    return result;
  }
}
