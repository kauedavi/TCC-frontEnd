document.addEventListener("DOMContentLoaded", () => {
  const inputEmpresas = document.querySelector(".buscarEmpresas input");
  const buscarEmpresasDiv = document.querySelector(".buscarEmpresas");
  const buscarVagasDiv = document.querySelector(".buscarVagas");
  const areaBuscaVagas = document.querySelector(".areaBuscaVagas");
  const btnBuscarVagas = document.querySelector(".buscarVagas button");
  const cardsEmpresas = document.querySelectorAll(".cardEmpresa");
  const cardsVagas = document.querySelectorAll(".cardVaga");
  const inputVagas = areaBuscaVagas.querySelector("input");

  // ----------------------------
  // Buscar EMPRESAS (focus / blur)
  // ----------------------------
  inputEmpresas.addEventListener("focus", () => {
    cardsEmpresas.forEach((card) => (card.style.display = "block"));
    buscarVagasDiv.style.display = "none";

    buscarEmpresasDiv.style.marginTop = "0";
    buscarEmpresasDiv.style.paddingTop = "40px";
    buscarEmpresasDiv.style.paddingBottom = "40px";

    setTimeout(() => {
      cardsEmpresas.forEach((card) => card.classList.add("show"));
    }, 100);
  });

  inputEmpresas.addEventListener("blur", () => {
    buscarVagasDiv.style.display = "block";
    buscarEmpresasDiv.style.marginTop = "10%";
    buscarEmpresasDiv.style.paddingTop = "100px";
    buscarEmpresasDiv.style.paddingBottom = "100px";

    cardsEmpresas.forEach((card) => card.classList.remove("show"));
    setTimeout(() => {
      cardsEmpresas.forEach((card) => {
        if (!card.classList.contains("show")) card.style.display = "none";
      });
    }, 500);
  });

  // ----------------------------
  // Buscar VAGAS (clicar no botão)
  // ----------------------------
  btnBuscarVagas.addEventListener("click", (e) => {
    e.stopPropagation();

    // Muda o fundo para rosa
    buscarVagasDiv.style.backgroundColor = "#ffa7fe";

    // Mostra o campo de busca e os cards
    areaBuscaVagas.style.display = "flex";
    areaBuscaVagas.style.flexDirection = "column";
    cardsVagas.forEach((card) => (card.style.display = "flex"));

    setTimeout(() => {
      cardsVagas.forEach((card) => card.classList.add("show"));
    }, 100);

    // Foca no input
    inputVagas.focus();
  });

  // ----------------------------
  // Quando o usuário clicar fora → voltar ao normal
  // ----------------------------
  document.addEventListener("click", (e) => {
    const clicouFora =
      !buscarVagasDiv.contains(e.target) && !btnBuscarVagas.contains(e.target);

    if (clicouFora) {
      // Volta cor ao normal
      buscarVagasDiv.style.backgroundColor = "white";

      // Some cards e input
      cardsVagas.forEach((card) => card.classList.remove("show"));
      setTimeout(() => {
        cardsVagas.forEach((card) => (card.style.display = "none"));
      }, 300);

      areaBuscaVagas.style.display = "none";
    }
  });

  // Evita fechar ao clicar no input
  inputVagas.addEventListener("click", (e) => e.stopPropagation());
});
