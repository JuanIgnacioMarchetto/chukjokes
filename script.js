function getJoke() {
    fetch('https://api.chucknorris.io/jokes/random')
      .then(response => response.json())
      .then(data => {
        document.getElementById('joke').innerText = data.value;
      })
      .catch(error => {
        console.error('Error al obtener el chiste:', error);
      });
  }
  
