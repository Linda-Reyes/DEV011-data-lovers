
export const athletesArray = (data) => {
  const newArr = data.map(pais => pais.team);
  return newArr
}

export const filterBy = ((data, filterBy, value) => {
  const arrayFilter = data.filter(athlete => {
    if (athlete[filterBy] === value) {
      return athlete;
    }
  })
  return arrayFilter
})
