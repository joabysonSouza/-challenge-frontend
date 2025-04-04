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


async function calcularJuros() {
  const expr = `${mensalidade} * (((1 + ${taxadeJuros}) ^ ${tempo} - 1) / ${taxadeJuros})`;
  const resultado = mensalidade * (((1 + taxadeJuros) ^ tempo - 1) / taxadeJuros).toFixed(3);
  try {
    console.log(resultado)
    const resposta = await fetch("http://api.mathjs.org/v4/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ expr }),
    });
     localStorage.setItem("nome",nome)
     localStorage.setItem("mensalidade",mensalidade)
     localStorage.setItem("tempo",tempo)
     localStorage.setItem("Taxa de juros",taxadeJuros)
     localStorage.setItem("resultado", resultado)

  } catch (error) {
    console.log("Ops aconteceu algum erro", error);
  }
}

function voltar() {
  return (window.location.href = "http://127.0.0.1:5500/index.html");
}
