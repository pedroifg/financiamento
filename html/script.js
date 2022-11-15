function calcFinanciamento() {
    var salario = parseFloat(document.getElementById("salario").value);
    var valorEmprestimo = parseFloat(document.getElementById("valorEmprestimo").value);
    var limiteEmprestimo = salario * 5;

    if (valorEmprestimo > limiteEmprestimo) {
        document.getElementById('resultado').innerHTML = 'Financiamento negado. Obrigado!'
    } else {
        document.getElementById('resultado').innerHTML = 'Financiamento aprovado. Obrigado!!'
    }
}