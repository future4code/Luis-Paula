import { performAttack } from '../src/performAttack';
import { Character } from '../src/validateCharacters';

describe('Testing performAttack', () => {
  //#region Perform Attack
  test('Should perfom an Attack', () => {
    const defender: Character = {
      name: 'Mario',
      defense: 300,
      life: 2500,
      strength: 150,
    };
    const attacker: Character = {
      name: 'Kung Lao',
      defense: 100,
      life: 1900,
      strength: 500,
    };

    const validatorMock = jest.fn(() => {
      return true;
    });

    performAttack(attacker, defender, validatorMock);

    expect(defender.life).toEqual(2300);
    expect(validatorMock).toHaveBeenCalled();
    expect(validatorMock).toHaveBeenCalledTimes(2);
    expect(validatorMock).toHaveReturnedTimes(2);
  });
  //#endregion

  //#region Invalid Character
  test('Should return an Invalid Character', () => {
    const defender: Character = {
      name: 'Mario',
      defense: -150,
      life: 2500,
      strength: 150,
    };
    const attacker: Character = {
      name: 'Kung Lao',
      defense: 100,
      life: 1900,
      strength: 500,
    };

    const validatorMock = jest.fn(() => {
      return false;
    });
    try {
      performAttack(attacker, defender, validatorMock as any);
    } catch (error: any) {
      expect(error.message).toBe('Invalid Character');
      expect(validatorMock).toHaveBeenCalled();
      expect(validatorMock).toHaveBeenCalledTimes(1);
      expect(validatorMock).toHaveReturnedTimes(1);
    } finally {
      expect.assertions(4);
    }
  });
  //#endregion

  //#region Defeated Enemy
  test('Should return a Defeated Enemy', () => {
    const defender: Character = {
      name: 'Mario',
      defense: 200,
      life: 100,
      strength: 300,
    };
    const attacker: Character = {
      name: 'Kung Lao',
      defense: 100,
      life: 1900,
      strength: 500,
    };

    const validatorMock = jest.fn(() => {
      return true;
    });
    try {
      performAttack(attacker, defender, validatorMock as any);
      expect(defender.life).toEqual(-400);
    } catch (error: any) {
    } finally {
      expect.assertions(1);
    }
  });
  //#endregion
});
