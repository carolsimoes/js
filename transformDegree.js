/*  ## Celsius em Fahrenheit
    função que recebe uma string em celsius ou fahrenheit
    e transforma de uma unidade para a outra

    C = (F - 32) * 5/9

    F = C * 9/5 + 32

*/


function transformDegree(degree){
    const celsiusExists = degree.toUpperCase().includes('C')
    const fahrenheitExists = degree.toUpperCase().includes('F')

    //fluxo de erro
    if(!celsiusExists && !fahrenheitExists){
        throw new Error('Grau não identificado')
    }

    //fluxo ideal, F-> C
    let updatedDegree = Number(degree.toUpperCase().replace("F", ""));
    let formula = fahrenheit => (fahrenheit - 32) * 5/9
    let degreeSign = 'C'
   
    //fluxo alternativo, C -> F  
    if(celsiusExists){
        updatedDegree = Number(degree.toUpperCase().replace("C", ""));
        formula = celsius => celsius * 9/5 + 32
        degreeSign = 'F'
    }

    return formula(updatedDegree) + degreeSign
}

try {
    console.log( transformDegree('10C'))
   console.log( transformDegree('50F'))
   console.log( transformDegree('50D'))
} catch (error) {
    console.log(error.message)
}