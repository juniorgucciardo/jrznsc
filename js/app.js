document.addEventListener("DOMContentLoaded", function () {
    const glitchElement = document.getElementById("glitch");

    // Verifique se o elemento foi encontrado
    if (!glitchElement) {
        console.error("Elemento com id 'glitch' não encontrado");
        return;
    }

    // Função para ativar a animação de glitch
    function activateGlitch() {
        glitchElement.classList.add("glitch-active");
        setTimeout(() => {
            glitchElement.classList.remove("glitch-active");
        }, 1500); // Duração do glitch
    }

    // Ativa o glitch ao mover o mouse
    document.addEventListener("mousemove", activateGlitch);

    // Ativa o glitch ao carregar a página
    glitchElement.classList.add("glitch-active");
    setTimeout(() => {
        glitchElement.classList.remove("glitch-active");
    }, 1500);

    // Ativa o glitch esporadicamente
    setInterval(() => {
        glitchElement.classList.add("glitch-active");
        setTimeout(() => {
            glitchElement.classList.remove("glitch-active");
        }, 1500); // Duração do glitch esporádico
    }, 10000); // Frequência esporádica (10 segundos neste exemplo)
});