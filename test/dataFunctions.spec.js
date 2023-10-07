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
  });
});

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
