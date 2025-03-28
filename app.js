const inputNome = document.querySelector(".nome");
const inputMensalidade = document.querySelector(".mensalidade");
const selectTempo = document.querySelector(".tempo");

let nome = "";
let mensalidade = 0;
let tempo = 0;
const taxadeJuros = 0.00517;

inputNome.addEventListener("change", (event) => {
  nome = event.target.value;
});

inputMensalidade.addEventListener("change", (event) => {
  mensalidade = parseFloat(event.target.value);
});

selectTempo.addEventListener("change", (event) => {
  tempo = parseInt(event.target.value) * 12;
});

function calcularJuros() {
  const resultado =
    mensalidade * (((1 + taxadeJuros) ** tempo - 1) / taxadeJuros);
  localStorage.setItem("nome", nome);
  localStorage.setItem("mensalidade", mensalidade);
  localStorage.setItem("tempo", tempo);
  localStorage.setItem("resultado", resultado);

  window.location.href = "pagina-resultado.html";
}
