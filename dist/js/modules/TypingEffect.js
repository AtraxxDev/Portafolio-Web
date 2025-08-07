//    < !--Script para escritura automatica-- >
export default function TypingEffect() {
    const texts = [
        "Game Programmer",
        "Web Developer",
        "Unity Developer",
        "Software Developer",
        "C# Developer",
    ];

    const element = document.getElementById("typing-text");
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeLoop() {
        const currentText = texts[textIndex];
        const visibleText = currentText.substring(0, charIndex);
        element.textContent = visibleText;

        if (!isDeleting) {
            if (charIndex < currentText.length) {
                charIndex++;
                setTimeout(typeLoop, 100);
            } else {
                // Espera después de escribir completo
                setTimeout(() => {
                    isDeleting = true;
                    typeLoop();
                }, 2000);
            }
        } else {
            if (charIndex > 0) {
                charIndex--;
                setTimeout(typeLoop, 50);
            } else {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
                setTimeout(typeLoop, 300);
            }
        }
    }

    window.addEventListener("DOMContentLoaded", typeLoop);

}