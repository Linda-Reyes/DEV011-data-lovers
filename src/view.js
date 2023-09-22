// estas funciones son de ejemplo

export const renderItems = (data) => {

//const athletes = document.getElementById("root");
const ul = document.createElement("ul")
ul.setAttribute("class", "cards-conteiner")

data.forEach((element) => {
  const frontCard = document.createElement("dl");
  frontCard.setAttribute("itemscope", "");
  frontCard.setAttribute("itemtype", "front-card");
  frontCard.classList.add("flex-card");

  // Crea la estructura para el frente de la tarjeta
  frontCard.innerHTML = `
    <dt>Nombre:</dt><dd itemprop="name">${element.name}</dd>
    <dt>País:</dt><dd itemprop="team">${element.team}</dd>
    <dt>Deporte:</dt><dd itemprop="sport">${element.sport}</dd>
    <dt>Género:</dt><dd itemprop="gender">${element.gender}</dd>
    <dt>Edad:</dt><dd itemprop="age">${element.age}</dd>
  `;

  const backCard = document.createElement("dl");
  backCard.setAttribute("itemscope", "");
  backCard.setAttribute("itemtype", "back-card");
  backCard.classList.add("flex-card");

  // Crea la estructura para la parte posterior de la tarjeta
  backCard.innerHTML = `
    <dt>Medalla:</dt><dd itemprop="medal">${element.medal}</dd>
    <dt>Evento:</dt><dd itemprop="event">${element.event}</dd>
    <dt>Estatura:</dt><dd itemprop="height">${element.height}</dd>
    <dt>Peso:</dt><dd itemprop="weight">${element.weight}</dd>
  `;

  // Crea un contenedor para cada par de tarjetas (frente y dorso)
  const cardPair = document.createElement("li");
  cardPair.appendChild(frontCard);
  cardPair.appendChild(backCard);

  ul.appendChild(cardPair);

});

return ul;
}









/*
export const renderItems = (data) => {
  const ulElement = document.createElement("ul");
  ulElement.setAttribute("class", "cards-conteiner")
  const atheteCard = data.forEach((element) => {
    const liElement = document.createElement("li");
    liElement.innerHTML =`
      <dl itemscope itemtype="front-card" class="flex-card">
        <dt>Nombre: </dt><dd itemprop="name">${element.name}</dd>
        <dt>País: </dt><dd itemprop="team">${element.team}</dd>
        <dt>Deporte: </dt><dd itemprop="sport">${element.sport}</dd>
        <dt>Genero: </dt><dd itemprop="gender">${element.gender}</dd>
        <dt>Edad:</dt><dd itemprop="age">${element.age}</dd>
      </dl>
      <dl itemscope itemtype="back-card" class="flex-card">
        <dt>Medalla: </dt><dd itemprop="medal">${element.medal}</dd>
        <dt>Evento:</dt><dd itemprop="event">${element.event}</dd>
        <dt>Estatura:</dt><dd itemprop="height">${element.height}</dd>
        <dt>Peso:</dt><dd itemprop="weight">${element.weigth}</dd>
        /*<dt>IMC:</dt><dd itemprop="imc">IMC: 31</dd>*/
      /*</dl> 
    `;
    ulElement.appendChild(liElement); 
  });
  return ulElement;
};
*/

