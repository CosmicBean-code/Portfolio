import { ChangeFontH1 } from "./events.js";

function principalfontsize() {
    const area = window.innerWidth * window.innerHeight;
    const fontSize = 0.015 * window.innerWidth + 0.015 * window.innerHeight;  // Ajusta el tamaño de fuente según el área
    document.querySelector('#html').style.fontSize = fontSize + 'px';
}

document.addEventListener('DOMContentLoaded', () => {
    principalfontsize();
    ChangeFontH1();

    window.addEventListener('resize', () => {
        principalfontsize();  // Recalcula área cada cambio
    });
});