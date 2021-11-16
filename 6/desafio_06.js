function somar(numero1, numero2) {
    let soma = numero1 + numero2;
    return 'A soma dos dois números é: ' + soma;
}

function diminuir(numero1, numero2) {
    let dif = numero1 - numero2;
    return 'A diferença dos dois números é: ' + dif;
}

function multiplicar(numero1, numero2) {
    let mult = numero1 * numero2;
    return 'A multiplicação dos dois números é: ' + mult;
}

function dividir(numero1, numero2) {
    let div = numero1 / numero2;
    return 'A divisão dos dois números é: ' + div;
}

let n1 = 10
let n2 = 5

var operações = [somar(n1, n2), diminuir(n1, n2), multiplicar(n1, n2), dividir(n1, n2)]

operações.forEach(op => console.log(op))
