let form = document.querySelector("#formulario");
const confirm = document.querySelector("#confirmado");
const botao = document.querySelector("#fechar");

form.addEventListener("submit", (evento) => {
  evento.preventDefault();

  confirm.classList.add("ativo");
});

botao.addEventListener("click", () => {
  confirm.classList.remove("ativo");
});
