const isBiggerThanOne = (first: string, second: string): boolean => {
  // Se a diferença de tamanho entre as duas é maior que 1, não é oneEdit
  if (Math.abs(second.length - first.length) > 1) return false;

  // Se uma é maior que a outra, a maior obrigatoriamente deve incluir a outra
  if (first.length > second.length) return first.includes(second);
  if (second.length > first.length) return second.includes(first);

  // Passando pelos ifs acima, significa que as duas têm o mesmo tamanho
  // Nesse caso, varremos as strings contando quantas letras diferentes tem
  let diffCount = 0;
  for (let i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) diffCount++;
  }

  // Retorna true se a diferença é 1, false caso contrário
  return diffCount === 1;
};
