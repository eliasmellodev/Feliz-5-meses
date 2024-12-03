// script.js
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        console.log("Botão clicado: " + button.textContent);
    });
});
