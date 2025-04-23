const precoPortugal = 79.9;
document.getElementById("preco-portugal").textContent =
  precoPortugal.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

const precoBrasil = 109.9;
document.getElementById("preco-brasil").textContent =
  precoBrasil.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
