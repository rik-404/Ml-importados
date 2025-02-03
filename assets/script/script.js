// Adiciona um evento ao botão de filtro
document.getElementById('aplicarFiltros').addEventListener('click', function() {
  // Pega os valores dos filtros selecionados
  let precoFiltro = document.getElementById('preco').value;
  let marcaFiltro = document.getElementById('marca').value;

  // Pega todos os produtos
  let produtos = document.querySelectorAll('.produto');

  // Itera por todos os produtos e aplica os filtros
  produtos.forEach(function(produto) {
      // Pega os dados de preço e marca do produto
      let precoProduto = parseFloat(produto.getAttribute('data-preco'));
      let marcaProduto = produto.getAttribute('data-marca');

      // Verifica se o produto atende aos filtros
      let mostrarProduto = true;

      // Filtro de preço
      if (precoFiltro !== 'todos') {
          if (precoFiltro === 'baixo' && precoProduto > 200) {
              mostrarProduto = false;
          } else if (precoFiltro === 'medio' && (precoProduto <= 200 || precoProduto > 500)) {
              mostrarProduto = false;
          } else if (precoFiltro === 'alto' && precoProduto <= 500) {
              mostrarProduto = false;
          }
      }

      // Filtro de marca
      if (marcaFiltro !== 'todos' && marcaProduto !== marcaFiltro) {
          mostrarProduto = false;
      }

      // Exibe ou esconde o produto baseado nos filtros
      if (mostrarProduto) {
          produto.style.display = 'block';
      } else {
          produto.style.display = 'none';
      }
  });
});
