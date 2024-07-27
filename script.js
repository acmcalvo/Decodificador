// Seleccionar elementos del DOM
const inputTexto = document.getElementById('inputTexto');
const btnEncriptar = document.getElementById('btnEncriptar');
const btnDesencriptar = document.getElementById('btnDesencriptar');
const resultado = document.getElementById('resultado');
const resultadoImagen = document.getElementById('resultadoImagen');
const btnCopiar = document.getElementById('btnCopiar');
const limpiar = document.getElementById('limpiar');
const textArea = document.getElementById("inputTexto");


// Función para validar texto (solo letras minúsculas y sin caracteres especiales // NOTA le agrege los caracteres ! @ y ?)
function validarTexto(texto) {
    return /^[a-z\s!@?]+$/.test(texto);
}

// Función para encriptar texto
function encriptar(texto) {
    let textoEncriptado = texto.replace(/e/g, 'enter')
                               .replace(/i/g, 'imes')
                               .replace(/a/g, 'ai')
                               .replace(/o/g, 'ober')
                               .replace(/u/g, 'ufat');
    return textoEncriptado;
}

// Función para desencriptar texto
function desencriptar(texto) {
    let textoDesencriptado = texto.replace(/enter/g, 'e')
                                  .replace(/imes/g, 'i')
                                  .replace(/ai/g, 'a')
                                  .replace(/ober/g, 'o')
                                  .replace(/ufat/g, 'u');
    return textoDesencriptado;
}

// Función para mostrar resultado
function mostrarResultado(texto) {
    resultado.textContent = texto;
    resultadoImagen.style.display = 'none';
    btnCopiar.classList.remove("hidden");
    limpiar.classList.remove("hidden");
}

// Evento para encriptar texto
btnEncriptar.addEventListener('click', () => {
    const texto = inputTexto.value;
    if (validarTexto(texto)) {
        const textoEncriptado = encriptar(texto);
        mostrarResultado(textoEncriptado);
    } else {
        alert('Por favor, introduce solo letras minúsculas y sin caracteres especiales.');
    }
});


// Nota  El problema (no mostraba el boton de copiar) parece ser que la función mostrarResultado no se está llamando dentro 
// de los eventos de btnEncriptar y btnDesencriptar

// Evento para desencriptar texto
btnDesencriptar.addEventListener('click', () => {
    const texto = inputTexto.value;
    if (validarTexto(texto)) {
        const textoDesencriptado = desencriptar(texto);
         mostrarResultado(textoDesencriptado);
    } else {
        alert('Por favor, introduce solo letras minúsculas y sin caracteres especiales.');
    }
});

// Función para copiar al portapapeles
btnCopiar.addEventListener('click', () => {
    const texto = resultado.textContent;
    navigator.clipboard.writeText(texto)
        .then(() => {
            alert('Texto copiado al portapapeles');
        })
        .catch(err => {
            console.error('Error al copiar al portapapeles', err);
        });
});

textArea.addEventListener("input", function () {
   this.style.height = "auto";
   this.style.height = this.scrollHeight + "px";
});









