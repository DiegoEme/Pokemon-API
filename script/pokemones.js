const url = "https://pokeapi.co/api/v2/pokemon/1";

const getData = () => {
  for (let i = 1; i <= 150; i++) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
      .then((response) => response.json())
      .then((json) => {
        llenarDatos(json, i);
        console.log(json);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }
};

getData();

//lenar datos en index

const llenarDatos = (datos, i) => {
  let html = "";
  html +=
    '<div class="card text-dark bg-light margin-card" style="width: 12rem;">';
  html += `<img src="${datos.sprites.front_default}" class="card-img-top">`;
  html += '<div class="card-body">';
  html += `<h5 class="card-title">${
    "<span id='number'>" +
    "N°" +
    i.toString().padStart(3, "0") +
    " " +
    "</span>" +
    "<br/>" +
    datos.forms[0].name.charAt(0).toUpperCase() +
    datos.forms[0].name.slice(1)
  }</h5>`;
  html += `<p class="card-text">Type: ${datos.types[0].type.name}</p>`;
  html += "</div>";
  html += "</div>";

  document.getElementById("pokemones").innerHTML += html;
};
