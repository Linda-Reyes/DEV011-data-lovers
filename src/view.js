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
    <img src= "./Images/logoCards.png" class="imgLogo">
    <dt></dt><dd class="name" itemprop="name">${element.name}</dd>
    <dt></dt><dd class="team" itemprop="team">${element.team}</dd>
    <dl class="elements">
    <dt></dt><dd class="sport" itemprop="sport">Sport: ${element.sport}</dd>
    <dt></dt><dd class="gender" itemprop="gender">Gender: ${element.gender}</dd>
    <dt></dt><dd class="medal" itemprop="medal">Medal: ${element.medal}</dd>
    </dl>
    <dt>Event: </dt><dd class="event" itemprop="event">${element.event}</dd>
  `;

    // Crea un contenedor para cada par de tarjetas (frente y dorso)
    li.appendChild(card);
    ul.appendChild(li);

  });

  return ul;
}



