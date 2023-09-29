// estas funciones son de ejemplo

export const renderItems = (data) => {

  //const athletes = document.getElementById("root");
  const ul = document.createElement("ul")
  ul.setAttribute("class", "cards-container")

  data.forEach((element) => {
    const li = document.createElement("li");
    li.setAttribute("itemscope", "");
    li.setAttribute("itemtype", "front-card");
    li.classList.add("flex-card");

    const card = document.createElement("dl");
   
    // Crea la estructura para el frente de la tarjeta
    card.innerHTML = `
    <dt></dt><dd itemprop="name">${element.name}</dd>
    <dt>Team:</dt><dd itemprop="team">${element.team}</dd>
    <dt>Sport:</dt><dd itemprop="sport">${element.sport}</dd>
    <dt>Gender:</dt><dd itemprop="gender">${element.gender}</dd>
    <dt>Medal:</dt><dd itemprop="medal">${element.medal}</dd>
    <dt>Event:</dt><dd itemprop="event">${element.event}</dd>
  `;

    // Crea un contenedor para cada par de tarjetas (frente y dorso)

    li.appendChild(card);
    ul.appendChild(li);

  });

  return ul;
}



