function verificarNota() {
    const notaInput = document.getElementById('nota');
    const mensagem = document.getElementById('mensagem');
    const nota = parseFloat(notaInput.value);

    if (isNaN(nota) || nota < 0 || nota > 10) {
        mensagem.textContent = 'Nota inválida. Por favor, digite um valor entre 0 e 10.';
        mensagem.style.color = '#d32f2f'; 
    } else {
        mensagem.textContent = 'Nota válida!';
        mensagem.style.color = '#388e3c'; 
    }
}
