function verificarDados() {
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const mensagem = document.getElementById('mensagem');

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    if (username === password) {
        mensagem.textContent = 'A senha não pode ser igual ao nome de usuário. Por favor, tente novamente.';
    } else {
        mensagem.textContent = 'Cadastro realizado com sucesso!';
        mensagem.style.color = '#388e3c'; 
    }
}
