// importando pacote prompt para receber entrada de dados no terminal
const prompt = require('prompt-sync')();



// Função para ler um número inserido pelo usuario
function lerNumero(mensagem) {
    while (true) {
        let entrada = prompt(mensagem);
        let numero = parseFloat(entrada);
        if (!isNaN(numero)) {
            return numero;
        }
        console.log("Por favor, insira um número válido.");
    }
}

// Array para armazenar os gastos diários
let gastosSemana = [];

// Loop para solicitar os gastos de cada dia
for (let i = 0; i < 7; i++) {
    let gastoDia = lerNumero("Insira o gasto do dia " + (i + 1) + ": R$");
    gastosSemana.push(gastoDia);
}

// Calcular o total gasto na semana
let totalGasto = 0;
for (let i = 0; i < gastosSemana.length; i++) {
    totalGasto += gastosSemana[i];
}

// Calcular a média diária de gastos
let mediaDiaria = totalGasto / 7;

// Formatar os valores de dinheiro para exibir com duas casas decimais
totalGasto = totalGasto.toFixed(2);
mediaDiaria = mediaDiaria.toFixed(2);

// Exibir os resultados
console.log("Total gasto na semana: R$" + totalGasto + "\nMédia diária de gastos: R$" + mediaDiaria);
