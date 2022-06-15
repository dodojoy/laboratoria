const brasilia = document.getElementById('resposta-1-3').value;
function perguntaUm() {
    if (brasilia === document.querySelector('input[name="radio-questao-1"]:checked').value){
        alert("radio button selecionado: " + document.querySelector('input[name="radio-questao-1"]:checked').value + ". Resposta certa!")
    } else {
        alert("radio button selecionado: " + document.querySelector('input[name="radio-questao-1"]:checked').value + ". Resposta errada.")
    }
}

const recife = document.getElementById('resposta-2-2').value;
function perguntaDois() {
    if (recife === document.querySelector('input[name="radio-questao-2"]:checked').value){
        alert("radio button selecionado: " + document.querySelector('input[name="radio-questao-2"]:checked').value + ". Resposta certa!")
    } else {
        alert("radio button selecionado: " + document.querySelector('input[name="radio-questao-2"]:checked').value + ". Resposta errada.")
    }
}

const estado = document.getElementById('resposta-3-3').value;
function perguntaTres() {
    if (estado === document.querySelector('input[name="radio-questao-3"]:checked').value){
        alert("radio button selecionado: " + document.querySelector('input[name="radio-questao-3"]:checked').value + ". Resposta certa!")
    } else {
        alert("radio button selecionado: " + document.querySelector('input[name="radio-questao-3"]:checked').value + ". Resposta errada.")
    }
}

function inputNome() {
    if (document.getElementById('text-nome').value === "") {
        alert("Por favor, preencha o campo nome")
    } else {
    alert("Olá, " + document.getElementById('text-nome').value + "!")
    }
}
