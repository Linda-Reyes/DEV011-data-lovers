
/*export const athletesArray = (data) => {
  const newArr = data.map(pais => pais.team);
  return newArr
}*/

export const filterBy = (data, filterBy, value) => {
  const arrayFilter = data.filter(athlete => athlete[filterBy] === value);
  return arrayFilter;
};

export const sortAtheltes = (data, sortBy, sortOrden) => {
  let arraySort = [];
  const dataCopy = [...data];
  if (sortOrden === "asc") {
    arraySort = dataCopy.sort((a, b) => {
      if (a[sortBy] < b[sortBy]) {
        return -1;
      }
    });
  } else if (sortOrden === "desc") {
    arraySort = dataCopy.sort((a, b) => {
      if (b[sortBy] < a[sortBy]) {
        return -1;
      }
    });
  }
  return arraySort;
}

export const computeStat = (data) => {
  const ages = data.map(athlete => athlete.age);
  const totalAthletes = ages.length;
  const sumAges = ages.reduce((acumulator, age) => acumulator + age, 0);
  const averageAge = sumAges / totalAthletes;
  return parseFloat (averageAge.toFixed(1));
}
