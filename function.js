/*console.log("frase 1")
console.log("frase 2")
console.log("frase 3")

console.log("frase 1")
console.log("frase 2")
console.log("frase 3")

function criarFrase(){

console.log("frase 1")
console.log("frase 2")
console.log("frase 3")
}

criarFrase()

const soma = function(){



}

const sum = () =>{



}

function soma(n1,n2){
    let total = n1+n2;
    return total;
    console.log(n1+n2)
}
console.log(`A soma é ${soma(5,5)}`)

function fazerSuco(fruta1, fruta2){
    console.log(`O suco é de ${fruta1} ${fruta2}`)
}

fazerSuco('Banana','uva')*/

/*
1 – Crie uma função que receba dois números como parâmetro e retorne a soma;

2 – Crie uma função que receba dois números como parâmetro e retorne à subtração;

3 – Crie uma função que receba dois números como parâmetro e retorne à
multiplicação;

4 – Crie uma função que receba dois números como parâmetro e retorne a divisão;

5 – Crie uma função que receba nome e sobrenome como parâmetro e retorne os 
dois concatenados;

6 – Criei uma função que receba uma temperatura em fahrenheit e converta 
para celsius;

7 – Crie uma função que receba um peso e altura retorne o cálculo do imc;

8 – Crie uma função que calcule a área do quadrado; 

9 – Criei uma função que cálcule a área do circulo;

*/

function soma(n1,n2){
    let total = n1+n2
    return total;
    
}
console.log(`A soma de n1 + n2 é ${soma(10,5)}`)

function subtracao (n1,n2){
    let total = n1-n2
    return total;
    
}
console.log(`A subtração de n1 + n2 é ${subtracao(10,5)}`)

function multiplicacao (n1,n2){
    let total = n1*n2
    return total;
    
}
console.log(`A multiplicação de n1 + n2 é ${multiplicacao(10,5)}`)

function divisao (n1,n2){
    let total = n1/n2
    return total;
    
}
console.log(`A divisão de n1 + n2 é ${divisao(10,5)}`)

function concatenar (nome,sobrenome){
    console.log(`A concatenação do nome e sobrenome é ${nome} ${sobrenome}`)
}
concatenar("Octavio","Oliveira")

function graus (celsius){
  let divisao = celsius *9/5
  let resultado = divisao +32
  return resultado
   
}
console.log(`A conversão de celsius em fahreinheit graus ${graus (20)}`)

function imc(altura, peso) {
    let resultado = peso/(altura*altura)
    return resultado
}
console.log(imc(1.78 , 64))

function valor(base,altura){
 area = base*altura;
 return area;   
 }
 console.log(`A area é ${valor(20,60)}`)

 function circulo(n1){
 area = Math.PI* n1*n1;   
 return area; 
 }
 
 console.log(`A area do circulo ${circulo(5)}`)





















