function iniciarCarrossel(idCarrossel) {
    const carrossel = document.getElementById(idCarrossel);
    const fotos = carrossel.querySelectorAll('.carrossel-foto');
    let indexAtual = 0;

    function mostrarProximaFoto() {
      fotos[indexAtual].classList.remove('ativo');
      indexAtual = (indexAtual + 1) % fotos.length;
      fotos[indexAtual].classList.add('ativo');
    }

    setInterval(mostrarProximaFoto, 3000);
  }

  // Inicia os três carrosséis
  iniciarCarrossel('carrossel1');
  iniciarCarrossel('carrossel2');
  iniciarCarrossel('carrossel3');