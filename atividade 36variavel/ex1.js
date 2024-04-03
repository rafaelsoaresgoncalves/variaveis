// 01) Soma de dois números
let num1 = 5;
let num2 = 3;
console.log("Soma:", num1 + num2);

// 02) Subtração de dois números
console.log("Subtração:", num1 - num2);

// 03) Produto de dois números
console.log("Produto:", num1 * num2);

// 04) Divisão de dois números
console.log("Divisão:", num1 / num2);

// 05) Quadrado de um número
let numero = 4;
console.log("Quadrado:", numero ** 2);

// 06) Raiz quadrada de um número
console.log("Raiz quadrada:", Math.sqrt(numero));

// 07) Módulo (valor absoluto) de um número
console.log("Módulo:", Math.abs(-7));

// 08) Par ou ímpar
let num = 10;
if (num % 2 === 0) {
    console.log("Par");
} else {
    console.log("Ímpar");
}

// 09) Positivo, negativo ou zero
let numero2 = -3;
if (numero2 > 0) {
    console.log("Positivo");
} else if (numero2 < 0) {
    console.log("Negativo");
} else {
    console.log("Zero");
}

// 10) Maior número
let a = 10;
let b = 20;
console.log("Maior número:", Math.max(a, b));

// 11) Menor número
console.log("Menor número:", Math.min(a, b));

// 12) Média de três números
let x = 10, y = 20, z = 30;
let media = (x + y + z) / 3;
console.log("Média:", media);

// 13) Fatorial de um número
let fatorial = 5;
let resultado = 1;
for (let i = 2; i <= fatorial; i++) {
    resultado *= i;
}
console.log("Fatorial de", fatorial + ":", resultado);

// 14) Primo ou não
let primo = 17;
let isPrimo = true;
for (let i = 2; i <= Math.sqrt(primo); i++) {
    if (primo % i === 0) {
        isPrimo = false;
        break;
    }
}
if (isPrimo) {
    console.log(primo + " é primo.");
} else {
    console.log(primo + " não é primo.");
}

// 15) Números de 1 até o número fornecido
let n = 10;
console.log("Números de 1 até", n + ":");
for (let i = 1; i <= n; i++) {
    console.log(i);
}

// 16) Tabuada de um número
let tabuada = 7;
console.log("Tabuada do", tabuada + ":");
for (let i = 1; i <= 10; i++) {
    console.log(tabuada + " x " + i + " =", tabuada * i);
}

// 17) Quadrado perfeito ou não
let quadradoPerfeito = 16;
let raiz = Math.sqrt(quadradoPerfeito);
if (raiz === Math.floor(raiz)) {
    console.log(quadradoPerfeito + " é um quadrado perfeito.");
} else {
    console.log(quadradoPerfeito + " não é um quadrado perfeito.");
}

// 18) Múltiplo de 3
let multiplo = 9;
if (multiplo % 3 === 0) {
    console.log(multiplo + " é múltiplo de 3.");
} else {
    console.log(multiplo + " não é múltiplo de 3.");
}

// 19) Divisível por 5
let divisivel = 25;
if (divisivel % 5 === 0) {
    console.log(divisivel + " é divisível por 5.");
} else {
    console.log(divisivel + " não é divisível por 5.");
}

// 20) Soma de todos os números pares de 1 até o número fornecido
let limite = 20;
let somaPares = 0;
for (let i = 2; i <= limite; i += 2) {
    somaPares += i;
}
console.log("Soma de todos os números pares até", limite + ":", somaPares);

// 21) Soma de dois números
let numA = 10;
let numB = 5;
console.log("Soma:", numA + numB);

// 22) Subtração de dois números
console.log("Subtração:", numA - numB);

// 23) Produto de dois números
console.log("Produto:", numA * numB);

// 24) Divisão de dois números
console.log("Divisão:", numA / numB);

// 25) Quadrado de um número
let número = 7;
console.log("Quadrado:", numero ** 2);

// 26) Raiz quadrada de um número
console.log("Raiz quadrada:", Math.sqrt(numero));

// 27) Módulo (valor absoluto) de um número
console.log("Módulo:", Math.abs(-10));

// 28) Par ou ímpar
let number = 15;
if (number % 2 === 0) {
    console.log("Par");
} else {
    console.log("Ímpar");
}

// 29) Positivo, negativo ou zero
let numValue = -5;
if (numValue > 0) {
    console.log("Positivo");
} else if (numValue < 0) {
    console.log("Negativo");
} else {
    console.log("Zero");
}

// 30) Maior número
let firstNum = 15;
let secondNum = 20;
console.log("Maior número:", Math.max(firstNum, secondNum));

// 31) Menor número
console.log("Menor número:", Math.min(firstNum, secondNum));

// 32) Média de três números
let numX = 15, numY = 25, numZ = 35;
let average = (numX + numY + numZ) / 3;
console.log("Média:", average);

// 33) Fatorial de um número
let factNumber = 6;
let result = 1;
for (let i = 2; i <= factNumber; i++) {
    result *= i;
}
console.log("Fatorial de", factNumber + ":", result);

// 34) Primo ou não
let primeNumber = 23;
let isPrime = true;
for (let i = 2; i <= Math.sqrt(primeNumber); i++) {
    if (primeNumber % i === 0) {
        isPrime = false;
        break;
    }
}
if (isPrime) {
    console.log(primeNumber + " é primo.");
} else {
    console.log(primeNumber + " não é primo.");
}

// 35) Números de 1 até o número fornecido
let numRange = 8;
console.log("Números de 1 até", numRange + ":");
for (let i = 1; i <= numRange; i++) {
    console.log(i);
}

// 36) Tabuada de um número
let multiplicationTable = 9;
console.log("Tabuada do", multiplicationTable + ":");
for (let i = 1; i <= 10; i++) {
    console.log(multiplicationTable + " x " + i + " =", multiplicationTable * i);
}
