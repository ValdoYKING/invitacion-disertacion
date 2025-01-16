// Configura la fecha de tu disertación en el formato correcto
const fechaDisertacion = new Date('2025-01-16T09:00:00').getTime(); // 16 de enero de 2025 a las 9:00:00

function actualizarContador() {
    const ahora = new Date().getTime();
    const tiempoRestante = fechaDisertacion - ahora;

    if (tiempoRestante > 0) {
        const dias = Math.floor(tiempoRestante / (1000 * 60 * 60 * 24));
        const horas = Math.floor((tiempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((tiempoRestante % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((tiempoRestante % (1000 * 60)) / 1000);

        // Actualiza el contenido del contador
        document.getElementById('dias').textContent = String(dias).padStart(2, '0');
        document.getElementById('horas').textContent = String(horas).padStart(2, '0');
        document.getElementById('minutos').textContent = String(minutos).padStart(2, '0');
        document.getElementById('segundos').textContent = String(segundos).padStart(2, '0');
    } else {
        // Muestra mensaje si el evento ya comenzó
        document.getElementById('contador').innerHTML = '<br><h2>¡La disertación ha comenzado 🎉!</h2><a href="docs/Auto_Glass.pdf" download="Auto_Glass.pdf"><button class="download_pdf">Descargar memoria pdf</button></a>';
    }
}

// Ejecuta la función cada segundo
setInterval(actualizarContador, 1000);
actualizarContador(); // Muestra el contador inicial inmediatamente