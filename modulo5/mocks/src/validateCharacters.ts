export interface Character {
  name: string;
  defense: number;
  life: number;
  strength: number;
}

export const validateCharacters = (input: Character) => {
  if (!input.defense || !input.strength || !input.name || !input.life) {
    return false;
  }

  if (input.defense <= 0 || input.strength <= 0 || input.life <= 0) {
    return false;
  }

  return true;
};
