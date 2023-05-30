let btnCalc = document.querySelector('#btnCalc');
const IMC = () => {
    let peso = (document.querySelector('#peso').value);
    let altura = (document.querySelector('#altura').value);
    let resultado = document.querySelector('#resultado');
    let IMC_VALOR = peso / (altura * altura);
    if (IMC_VALOR <= 18.5) {
        resultado.innerHTML = `Abaixo do peso saudável - ${IMC_VALOR}`;
    } else if (IMC_VALOR > 18.5 && IMC_VALOR <= 24.9) {
        resultado.innerHTML = `Peso saudável - ${IMC_VALOR}`;
    } else if (IMC_VALOR > 18.5 && IMC_VALOR <= 24.9) {
        resultado.innerHTML = `Peso saudável - ${IMC_VALOR}`;
    }
    console.log(resultado);
};
btnCalc.addEventListener('click', IMC());
