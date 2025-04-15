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
  const resultado = mensalidade * (((1 + taxadeJuros) ^ tempo - 1) / taxadeJuros);
  try {
 
    const resposta = await fetch("http://api.mathjs.org/v4/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ expr }),
    });

    

    if(!nome || mensalidade <= 0 || tempo <=0){
     return alert("Insira dados validos")
    }
    localStorage.setItem("usuario",nome)
    localStorage.setItem("mensalidade",mensalidade.toLocaleString('pt-br',{style: 'currency', currency:'BRL'}))
    localStorage.setItem("tempo",tempo)
    localStorage.setItem("Taxa de juros",taxadeJuros)
    localStorage.setItem("resultado", resultado.toLocaleString('pt-br',{style: 'currency', 
      currency: 'BRL'}))
     
     window.location.href = "http://127.0.0.1:5500/pagina-resultado.html"

  } catch (error) {
    console.log("Ops aconteceu algum erro", error);
  }
}


