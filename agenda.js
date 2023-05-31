let btnCalc = document.querySelector('#btnCalc');
const IMC = () => {
    let peso = Number(document.querySelector('#peso').value);
    let altura = Number(document.querySelector('#altura').value);
    let resultado = document.querySelector('#resultado');
    let IMC_VALOR = peso / (altura * altura)
    if (IMC_VALOR <= 18.5){
        resultado.innerHTML = `Abaixo do peso saudável - ${IMC_VALOR}`
    }
    else if (IMC_VALOR > 18.5 && IMC_VALOR <= 24.9){
        resultado.innerHTML = `Peso saudável - ${IMC_VALOR}`
    }
    else if (IMC_VALOR > 24.9 && IMC_VALOR <= 29.9){
        resultado.innerHTML = `Sobrepeso - ${IMC_VALOR}`
    }
    else if (IMC_VALOR > 29.9 && IMC_VALOR <= 34.9){
        resultado.innerHTML = `Obesidade Grau 1 - ${IMC_VALOR}`
    }
    else if (IMC_VALOR > 34.9 && IMC_VALOR <= 39.9){
        resultado.innerHTML = `Obesidade Grau 2 - ${IMC_VALOR}`
    }
    else if (IMC_VALOR > 40){
        resultado.innerHTML = `Obesidade Grau 3 (Obesidade mórbida) - ${IMC_VALOR}`
    }
    else{
        resultado.innerHTML = `Insira valores corretos ${IMC_VALOR}`
    }
    
    console.log(resultado);
};
btnCalc.addEventListener('click', IMC);
