```
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
let contagem = 0
  for (let i = 0; i < arrayDeNumeros.length, i++){
    if(arrayDeNumeros[i] === numeroEscolhido){
      contagem++
      return `O número ${numeroEscolhido} aparece ${contagem}x`
    } else{
      return `Número não encontrado`
    }
  }
  return contagem
}
```
