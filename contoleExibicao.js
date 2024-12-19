
// Simulando carregamento com JavaScript
window.addEventListener("DOMContentLoaded", () => {
  // Renderiza a barra de navegação
  setTimeout(() => {
    document.getElementById("sec-3cd6").classList.remove("hidden");
  }, 500); // Exibe após 500ms

  // Renderiza a seção principal
  setTimeout(() => {
    document.getElementById("section-placeholder").remove();
    document.getElementById("sec-89a0").classList.remove("hidden");
    document.getElementById("sec-7fe7").classList.remove("hidden");
    document.getElementById("sec-f37f").classList.remove("hidden");
    document.getElementById("carousel_3c3e").classList.remove("hidden");
    

  }, 2000); // Exibe após 1.5s

  // Renderiza o restante do conteúdo
  setTimeout(() => {
    // document.getElementById("restante-placeholder").remove();
    // document.getElementById("restante").classList.remove("hidden");
  }, 3000); // Exibe após 3s
});
