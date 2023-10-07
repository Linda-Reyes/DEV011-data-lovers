<<<<<<< HEAD
import { filterBy, sortAtheltes } from '../src/dataFunctions.js';

//TEST UNITARIO FUNCIÓN FILTRO
describe('filterBy', () => {

  it('que filtre por medalla seleccionada y no por otra', () => {
    const lista = [
      { medal: "Gold"},  
      { medal: "Silver"},
      { medal: "Bronze"}
    ]
    const arrayFilter = [
      { medal: "Gold"}
    ]
    expect(filterBy(lista, "medal", "Gold")).toEqual(arrayFilter);
  });

  it('que filtre por medalla seleccionada y no por otra', () => {
    const lista = [
      { medal: "Gold"},  
      { medal: "Silver"},
      { medal: "Bronze"}
    ]
    const arrayFilter = [
      { medal: "Silver"}
    ]
    expect(filterBy(lista, "medal", "Silver")).toEqual(arrayFilter);
  });

  it('que filtre por medalla seleccionada y no por otra', () => {
    const lista = [
      { medal: "Gold"},  
      { medal: "Silver"},
      { medal: "Bronze"}
    ]
    const arrayFilter = [
      { medal: "Bronze"}
    ]
    expect(filterBy(lista, "medal", "Bronze")).toEqual(arrayFilter);
  });

  it('que filtre por género seleccionado y no por otro', () => {
    const lista = [
      { gender: "F"},  
      { gender: "M"}
    ]
    const arrayFilter = [
      { gender: "F"}
    ]
    expect(filterBy(lista, "gender", "F")).toEqual(arrayFilter);
  });

  it('que filtre por género seleccionado y no por otro', () => {
    const lista = [
      { gender: "F"},  
      { gender: "M"}
    ]
    const arrayFilter = [
      { gender: "M"}
    ]
    expect(filterBy(lista, "gender", "M")).toEqual(arrayFilter);
=======
import { filterBy, computeStat, sortAtheltes } from '../src/dataFunctions.js';

describe('data', () => {
  describe('filterBy', () => {
    it('debería retornar el filtro de medallas de oro de una data de atletas', () => {
      const medalArray = [
        { name: "John", medal: "Gold", gender: "M"},
        { name: "Amanda", medal: "Silver", gender: "F"},
        { name: "Bob", medal: "Bronze", gender: "M"},
        { name: "Jessica", medal: "Silver", gender: "F"},
        { name: "Alex", medal: "Bronze", gender: "M"},
      ]
      const resultArray = [
        { name: "John", medal: "Gold", gender: "M"},
      ]
      expect(filterBy(medalArray, "medal", "Gold")).toEqual(resultArray);
    });
    it('debería retornar el filtro de medalla de bronce de la data de atletas', () => {
      const medalArray = [
        { name: "John", medal: "Gold", gender: "M"},
        { name: "Amanda", medal: "Silver", gender: "F"},
        { name: "Bob", medal: "Bronze", gender: "M"},
        { name: "Jessica", medal: "Silver", gender: "F"},
        { name: "Alex", medal: "Bronze", gender: "M"},
      ]
      const resultArray = [
        { name: "Bob", medal: "Bronze", gender: "M"},
        { name: "Alex", medal: "Bronze", gender: "M"},
      ]
      expect(filterBy(medalArray, "medal", "Bronze")).toEqual(resultArray);
    });
    it('que filtre por género seleccionado y no por otro', () => {
      const lista = [
        { gender: "F"},  
        { gender: "M"}
      ]
      const arrayFilter = [
        { gender: "F"}
      ]
      expect(filterBy(lista, "gender", "F")).toEqual(arrayFilter);
    });
  
    it('que filtre por género seleccionado y no por otro', () => {
      const lista = [
        { gender: "F"},  
        { gender: "M"}
      ]
      const arrayFilter = [
        { gender: "M"}
      ]
      expect(filterBy(lista, "gender", "M")).toEqual(arrayFilter);
    });
  })

  describe('sortAthletes', () => {

    it('que ordene la data ascendente según el nombre', () => {
      const lista = [
        {name: "Saeid Morad Abdevali"},
        {name: "Patimat Abakarova"},
        {name: "Luc Abalo"},
        {name: "Giovanni Abagnale"}
      ]
      const sortedData = sortAtheltes(lista, "name", "asc")
      const expectedData = lista.slice().sort((a, b) => a.name.localeCompare(b.name)) 
      expect(sortedData).toEqual(expectedData);
    });
  
    it('que ordene la data descendente según el nombre', () => {
      const lista = [
        {name: "Saeid Morad Abdevali"},
        {name: "Patimat Abakarova"},
        {name: "Luc Abalo"},
        {name: "Giovanni Abagnale"}
      ]
      const sortedData = sortAtheltes(lista, "name", "desc")
      const expectedData = lista.slice().sort((a, b) => b.name.localeCompare(a.name)) 
      expect(sortedData).toEqual(expectedData);
    });
>>>>>>> 16ba1c1f24e31a4c215ff6bddbd77d79162fd9ed
  });

<<<<<<< HEAD
//TEST UNITARIO FUNCIÓN ORDEN
describe('sortAthletes', () => {

  it('que ordene la data ascendente según el nombre', () => {
    const lista = [
      {name: "Saeid Morad Abdevali"},
      {name: "Patimat Abakarova"},
      {name: "Luc Abalo"},
      {name: "Giovanni Abagnale"}
    ]
    const sortedData = sortAtheltes(lista, "name", "asc")
    const expectedData = lista.slice().sort((a, b) => a.name.localeCompare(b.name)) 
    expect(sortedData).toEqual(expectedData);
  });

  it('que ordene la data descendente según el nombre', () => {
    const lista = [
      {name: "Saeid Morad Abdevali"},
      {name: "Patimat Abakarova"},
      {name: "Luc Abalo"},
      {name: "Giovanni Abagnale"}
    ]
    const sortedData = sortAtheltes(lista, "name", "desc")
    const expectedData = lista.slice().sort((a, b) => b.name.localeCompare(a.name)) 
    expect(sortedData).toEqual(expectedData);
  });
});

//TEST UNITARIO FUNCIÓN DE ESTADISTICA
=======
  describe('computeStat', () => {
    const ageArray = [
      { age: 20 },
      { age: 25 },
      { age: 30 },
    ];
    const dataFilter = [
      { age: 25 },
      { age: 30 },
    ];
    
    it('debería calcular la estadística de edad para la data general', () => {
      const compute = computeStat(ageArray);
      expect(compute).toBe(25);
    });
    
    it('debería calcular la estadística de edad para la data filtrada', () => {
      const compute = computeStat(dataFilter);
      expect(compute).toBe(27.5);
    });
  }); 
})
>>>>>>> 16ba1c1f24e31a4c215ff6bddbd77d79162fd9ed
