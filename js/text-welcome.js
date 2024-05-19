document.addEventListener('DOMContentLoaded', (event) => {
    const text = "Cześć";
    const container = document.getElementById('animatedText');
    let index = 0;

    function type() {
        if (index < text.length) {
            container.textContent += text.charAt(index);
            index++;
            setTimeout(type, 50); // Ustaw czas opóźnienia w milisekundach (300ms)
        }
    }

    type();
});
