/*sistema de gasto familiar
- um objeto com 2 propriedades do tipo array
 - uma função que soma o valor total das despesas e receitas
 -outra que calcula o total de despesas e receitas, e exibe mensagem se a família está com saldo positivo ou negativo, seguido do valor do saldo
*/
let caixa = {
    receitas: [2500, 3200, 250.43 , 360.45],
    despesas: [320.24, 128.45, 176.87, 1450]
}


function soma(array){
    let total = 0;
    for (const value of array) {
        total += value
    }
    return total
}


function calculaDespesa (){
    const calculaReceita = soma(caixa.receitas)
    const calculaDespesa = soma(caixa.despesas)

    const total = calculaReceita - calculaDespesa

    const itsOk = total >= 0

    let mensagem = "negativo"
    if(itsOk){
        mensagem = "positivo"
    }

    console.log(`Seu saldo é ${mensagem} : ${total.toFixed(2)}R$`)
}

calculaDespesa()
