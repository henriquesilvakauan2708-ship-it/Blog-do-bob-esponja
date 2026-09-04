document.querySelectorAll('.btn-curtir').forEach(botao => {
    botao.addEventListener('click', () => {
        const contador = botao.querySelector('.likes');
        let likesAtuais = parseInt(contador.textContent);
        contador.textContent = likesAtuais + 1;
    });
});
