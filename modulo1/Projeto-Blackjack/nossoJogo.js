/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log('Boas vindas ao jogo de BlackJack (21)!');

const iniciarJogo = () => {
  if (
    confirm('Vamos começar uma nova rodada? Abra o console para ver o jogo!')
  ) {
    console.log('Você aceitou! :)');
    const cartaDoUsuario1 = comprarCarta();
    const cartaDoUsuario2 = comprarCarta();

    const cartaDoComputador1 = comprarCarta();
    const cartaDoComputador2 = comprarCarta();

    const valorFinalUsuario = cartaDoUsuario1.valor + cartaDoUsuario2.valor;

    const valorFinalComputador =
      cartaDoComputador1.valor + cartaDoComputador2.valor;

    console.log(
      `As cartas do usuário foram: ${cartaDoUsuario1.texto} e ${cartaDoUsuario2.texto}.
Valendo respectivamente: ${cartaDoUsuario1.valor} e ${cartaDoUsuario2.valor}.
Tendo um valor final de: ${valorFinalUsuario}`
    );

    console.log(
      `As cartas do computador foram: ${cartaDoComputador1.texto} e ${cartaDoComputador2.texto}.
Valendo respectivamente: ${cartaDoComputador1.valor} e ${cartaDoComputador2.valor}.
Tendo um valor final de: ${valorFinalComputador}`
    );

    if (valorFinalUsuario > valorFinalComputador) {
      console.log('Parabéns! Você venceu!');
    } else if (valorFinalUsuario === valorFinalComputador) {
      console.log('Caramba! o.O Um empate');
    } else {
      console.log('O computador venceu! Tente outra vez!');
    }
  } else {
    console.log('O jogo acabou... Que pena... :(');
  }
};
iniciarJogo();

console.log('Para tentar novamente aperte F5 ou atualize a página! :)');
