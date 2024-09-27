function calcularMedia() {
    var n1 = parseFloat(document.getElementById("n1").value) || 0;
    var n2 = parseFloat(document.getElementById("n2").value) || 0;
    var n3 = parseFloat(document.getElementById("n3").value) || 0;
    var n4 = parseFloat(document.getElementById("n4").value) || 0;
    var n5 = parseFloat(document.getElementById("n5").value) || 0;
    if (isNaN(n1) || isNaN(n2) || isNaN(n3) || isNaN(n4)  || isNaN(n5)) {
        document.getElementById("res").innerHTML = 'Por favor, insira todas as notas corretamente.';
        return;
    }

    var res = (n1 + n2 + n3 + n4 + n5) / 2;
    
    var resultado = document.getElementById("res");
    resultado.innerHTML = 'A média é: ' + res.toFixed(2);
    
    // Limpa as classes anteriores
    resultado.classList.remove('pass', 'fail');

    // Verifica se o aluno passou ou não
    if (res >= 6) {
        resultado.innerHTML += '<br>Parabéns! Você passou!';
        resultado.classList.add('pass'); // Adiciona a classe de aprovação (verde)
    } else {
        resultado.innerHTML += '<br>Infelizmente, você não passou.';
        resultado.classList.add('fail'); // Adiciona a classe de reprovação (vermelho)
    }
}
