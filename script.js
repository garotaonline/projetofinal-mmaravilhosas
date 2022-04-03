const formulario = document.querySelector("form");
const inputNome = document.querySelector("#input-nome");
const recado = document.querySelector("#recado");

function comSeuNome (e) {
    e.preventDefault();
    const seuNome = (inputNome.value)
    recado.innerHTML = `Meu nome é ${seuNome}, e eu não terei medo!`;
}

formulario.addEventListener("submit", comSeuNome);