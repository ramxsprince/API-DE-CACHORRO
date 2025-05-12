function getDog() {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => {
        const img = document.getElementById('dog-img');
        img.src = data.message;
        img.style.display = 'block';
      })
      .catch(error => {
        alert("Erro ao carregar a imagem.");
        console.error(error);
      });
  }