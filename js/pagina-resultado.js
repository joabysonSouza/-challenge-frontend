let nomeStorage = localStorage.getItem("usuario")
let resultadoStorage = localStorage.getItem("resultado")
let mensalidadeStorage = localStorage.getItem("mensalidade")
let tempoStorage = localStorage.getItem("tempo")


const nomeResultado= document.querySelector(".nome")
const resultado= document.querySelector(".resultado")
const mensalidadeResultado= document.querySelector(".mensalidade")
const tempoResultado= document.querySelector(".tempo")



nomeResultado.textContent = `${nomeStorage}`
resultado.textContent = `${resultadoStorage}`
mensalidadeResultado.textContent = `${mensalidadeStorage}`
tempoResultado.textContent = `${tempoStorage}`


function voltar() {
  localStorage.clear()
    return (window.location.href = "http://127.0.0.1:5500/index.html");
  }