function checaRenovacaoRG(atualAno:number, nascimentoAno:number, emissaoAno:number) {
    const anoAtual = atualAno
    const anoNascimento = nascimentoAno
    const anoEmissao = emissaoAno
 
    const idade = anoAtual - anoNascimento
    const tempoCarteira = anoAtual - anoEmissao
 
    const cond1 = idade <= 20 && tempoCarteira >= 5
    const cond2 = idade > 20 && idade <= 50 && tempoCarteira >= 10
    const cond3 = idade > 50 && tempoCarteira >= 15
 
    return (cond1 || cond2 || cond3)
 }

 console.log(checaRenovacaoRG(Number(process.argv[2]), Number(process.argv[3]), Number(process.argv[4])))