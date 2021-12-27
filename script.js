function analisaNumero(n1, n2){
    var texto = '';
    texto += n1 === n2 ? `Os números ${n1} e ${n2} são iguais. ` : `Os números ${n1} e ${n2} não são iguais. `;
    texto += n1 + n2 >= 10 ? `Sua soma é ${n1 + n2}, que é maior que 10 ` : `Sua soma é ${n1 + n2}, que é menor que 10 `;
    texto += n1 + n2 >= 20 ? `e maior que 20` : `e menor que 20`;
    return texto;
}

console.log(analisaNumero(1, 2));