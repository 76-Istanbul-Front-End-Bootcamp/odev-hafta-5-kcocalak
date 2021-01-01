import data from "./data.js"
import { createTableElements } from "./main.js";

/*
  ALWAYS USE IMPORTED data ARRAY TO MAKE MANIPULATIONS

  ID for allcities table is #allcities
  ID for singlecity table is #singlecity
/*

/*
* PASS ARRAY TO createTableElements function to fill tables
* first argument - data
* second argument - tableId
* Example createTableElements([{name: "Istanbul"}], "allcities");
*/

/*
    ids for buttons and select

    Population - bigger than 500.000 => #populationBigger
    land area - less than 1000 => #landAreaLess
    Does any city has population less than 100.000? => #isPopulationLess
    Does every city has land area bigger than 100? => #isLandBigger
    city select => #selectcity
*/

/* RESET ACTION */
document.querySelector("#reset").addEventListener("click", () => {
  createTableElements(data, "allcities");
  createTableElements([], "singlecity");
});

/* START CODING HERE */

document.querySelector("#populationBigger").addEventListener("click", () => {
  const result = data.filter(city => city.population > 500000);
  createTableElements(result, "allcities");
  console.log('içerde: ', result);
});

document.querySelector("#landAreaLess").addEventListener("click", () => {
  const result = data.filter(city => city.landArea < 1000);
  createTableElements(result, "allcities");
  console.log('içerde: ', result);
});

document.querySelector("#isPopulationLess").addEventListener("click", () => {
  createTableElements([], "allcities");
  const isPopulationLess = data.some(city => city.population < 100000);
  alert((isPopulationLess) ? isPopulationLess : false);
});

document.querySelector("#isLandBigger").addEventListener("click", () => {
  createTableElements([], "allcities");
  const isLandBigger = data.some(city => city.landArea > 100);
  alert((isLandBigger) ? isLandBigger : false);
});

const citySelection = document.querySelector("#inputGroupSelect01");

//Deleted old select options
for (let i = citySelection.length ; i > 0; i--) {
  citySelection.remove(citySelection[i]);  
}

//Added new select options

const choose = document.createElement("option");
choose.setAttribute("selected",'');
choose.textContent = "Choose...";
citySelection.appendChild(choose);

const cityNames = data.map(city => city.name);
cityNames.forEach((element) => {
    
    const cityCreate = document.createElement("option");
    cityCreate.setAttribute("value",element);
    cityCreate.textContent = element;
    citySelection.appendChild(cityCreate);
    
});

//Selected options added to table 
citySelection.addEventListener("change", (event) => {
  const selectedCity = data.filter(city => event.target.value === city.name);
  createTableElements(selectedCity, "singlecity");
});