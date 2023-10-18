let nome1 = document.getElementById("texto1");
nome1.textContent = "André Victor Soares Castro";

let nome2 = document.getElementById("texto2");
nome2.textContent = "Alegre";

let nome3 = document.getElementById("texto3");
nome3.textContent = "ARIADNE JOHANNA GONÇAlVES";

let sobrenome = "Victor";
let ano = 2023;
console.log("O d% está no ano de %d. ",sobrenome,ano);

let url = "http://bra.ifsp.edu.br";
let site = "IFSP_BRA";
console.log("O site do %s é %o .",site,url);

function idade(){
    let idade = prompt("Indique sua idade: ");
    console.log("Sua idade é ", idade);
    frase.textContent = "Sua idade é "+ idade; 
};

function exercicio1(){
    let nota1 = prompt("Digite  a primeira nota: ");
    let nota2 = prompt("Digite a segunda nota: ");
    let nota3 = prompt("Digite a terceira nota: ");
    nota1 = parseFloat(nota1);
    nota2 = parseFloat(nota2);
    nota3 = parseFloat(nota3);
    media = (nota1+nota2+nota3)/3;
    resposta.textContent = "A média do aluno é  " + media.toFixed(2);
};

function exercicio2(){
    let nota1 = prompt("Digite  a primeira nota: ");
    let peso1 = prompt("Seu peso : ");
    let nota2 = prompt("Digite a segunda nota: ");
    let peso2 = prompt("Seu peso : ");
    let nota3 = prompt("Digite a terceira nota: ");
    let peso3 = prompt("Seu peso : ");
    nota1 = parseFloat(nota1);
    nota2 = parseFloat(nota2);
    nota3 = parseFloat(nota3);
    peso1 = parseFloat(peso1);
    peso2 = parseFloat(peso2);
    peso3 = parseFloat(peso3);
    media = (nota1*peso1)+(nota2*peso2)+(nota3*peso3);
    resposta.textContent = "A média do aluno é  " + media.toFixed(2);
};

function exercicio3(){
    let salario = prompt("Digite  seu sálario: ");
    let percentoal = prompt("Porcentagem de aumento : % ");
    percentoal = (percentoal/100)+1;
    aumento = salario*percentoal;
    resposta.textContent = "O aumento foi de : R$ " + aumento.toFixed(2);
};

function exercicio4(){
    let salario = prompt("Digite  seu sálario: ");
    total = salario*0.98;
    resposta.textContent = "O aumento foi de : R$ " + total.toFixed(2);
};

function exercicio5(){
    let num=0;
    do{
        num = prompt("Digite um numero : ");
    }while(num<=0);
    a = Math.pow(num,2);
    b = Math.pow(num,3);
    c = Math.sqrt(num);
    d = Math.pow(num,1/3);
    e = a+b;
    resposta.textContent = "A: "+a.toFixed(2)+" - B: "+b.toFixed(2)+" - C: "+c.toFixed(2)+" - D: "+d.toFixed(2)+" - E: "+e.toFixed(2);
};

function exercicio6(){
    pes = prompt("Digite uma medida em pés : ");
    metros = (pes/3.281);
    resposta.textContent = "Em metros seria : " + metros.toFixed(4)+"m";
}

function exercicio7(){
    espaco = prompt("Digite a distância em Km: ");
    tempo = prompt("Digite o tempo em segundos: ");
    velocidade = (espaco*1000)/tempo;
    resposta.textContent = "A velocidade média é de  : " + velocidade.toFixed(2)+"m/s";
}

function exercicio8(){
    hora = prompt("Horas trabalhadas : ");
    salarioMinimo = prompt("Salário minimo : ");
    valorHora= salarioMinimo/2;
    salarioBruto = hora*valorHora;
    imposto = 0.03*salarioBruto;
    salario= salarioBruto-imposto;
    resposta.textContent = "O sálario é de : R$ " + salario.toFixed(2);
};

function exercicio9(){
    let conta = 0;
    let salario = parseFloat(prompt("Sálario : "));
    let saque = parseFloat(prompt("Valor do primeiro cheque : "));
    conta += salario;
    cpmf1 = saque*0.0038;
    conta -= saque*1.0038;
    saque2 = conta*0.9962;
    cpmf2 =conta*0.0038;
    cpmf3 = cpmf1 + cpmf2;
    resposta.textContent = "O primeiro saque foi de " + saque.toFixed(2) +" R$ e o segundo saque foi de " + saque2.toFixed(2) + " R$. O valor descontado do CPMF foi de "+ cpmf3.toFixed(2) +" R$";
};

