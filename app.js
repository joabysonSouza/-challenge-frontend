const inputNome = document.querySelector(".nome");
const inputMensalidade = document.querySelector(".mensalidade");
const selectTempo = document.querySelector(".tempo");

const nome = "";
const mensalidade = "";
const tempo = "";

inputNome.addEventListener("change", (event) => {
  nome = event.target.value;

});

inputMensalidade.addEventListener("change", (event) => {
  mensalidade = event.target.value;

 
});

selectTempo.addEventListener("change", (event) => {
  tempo = event.target.value;

});
