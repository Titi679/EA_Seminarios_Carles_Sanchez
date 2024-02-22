//Este codigo coge los posts de la siguiente pag web y los muestra

fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((json) => console.log(json));