import { Character, validateCharacters } from './validateCharacters';

// export const performAttack = (attacker: Character, defender: Character) => {
//   if (!validateCharacters(attacker) || !validateCharacters(defender)) {
//     throw new Error('Invalid Character');
//   }

//   if (attacker.strength > defender.defense) {
//     defender.life = defender.life - (attacker.strength - defender.defense);
//   }
// };

export const performAttack = (
  attacker: Character,
  defender: Character,
  validator: (input: any) => boolean
) => {
  if (!validator(attacker) || !validator(defender)) {
    throw new Error('Invalid Character');
  }

  if (attacker.strength > defender.defense) {
    defender.life = defender.life - (attacker.strength - defender.defense);
  }

  if (defender.life <= 0) {
    return { message: 'Enemy defeated' };
  }
};
