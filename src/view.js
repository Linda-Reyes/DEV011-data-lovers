// estas funciones son de ejemplo

export const renderItems = (data) => {
 const card = data.forEach(element => {
  console.log(element.team)
return(
  `<dl itemscope itemtype="front-card" class="flex-card">
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
  </dl> `)
  });

  return card;
};

