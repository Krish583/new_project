/*
'use strict'
const getContries = () =>{
const xhr=new XMLHttpRequest();
xhr.open('GET', 'https://restcountries.eu/rest/v2/all');
xhr.responseType ="json";
xhr.onload =() =>{
    const data=xhr.response;
    //console.log(data)
    //console.log(JSON.parse(data));
    // a. Get all the countries 
    const countries=data.map(({name}) => name);
    console.log("Countries in the data are: ", countries);
    //b. Get all the countries with a population of greater than 10 crores 
    const count=data.filter(({population}) => population > 100000000).map(({name}) => name);
    console.log("Population of countries greater than 10 crores are: ", count);
}
xhr.send();
}

getContries();
*/

'use strict'
const getContries = () =>{
const xhr=new XMLHttpRequest();
xhr.open('GET', 'https://restcountries.eu/rest/v2/all');
xhr.responseType ="json";
xhr.onload =() =>{
    const data=xhr.response;

// a. Get all the countries from Asia continent /region using Filter function
const asia=data.filter(({region}) => region == "Asia").map(({name}) => name);
console.log("Asia countries are: ", asia);

//b. Get all the countries with a population of less than 2 lakhs using Filter function
const count=data.filter(({population}) => population < 200000).map(({name}) => name);
console.log("Population of countries less than 2 Lakhs are: ", count);

//c. Print the following details name, capital, flag using forEach function
console.log("Country_Name - Captial  - Flag")
Object.entries(data).forEach((entry) => {
    let name=entry[1].name;
    let flag=entry[1].flag;
    let capital = entry[1].capital;
  console.log(name +" - "+capital+" - "+flag);
  });
 
//d. Print the total population of countries using reduce function
const reducer = (accumulator, currentValue) => accumulator + currentValue;
const total = data.map(({population})=>population).reduce(reducer);
console.log("Total Popualation in the world:", total)

//e. Print the country which uses US Dollars as currency
const cur=data.filter(({currencies}) => {
     for(let i=0;i<currencies.length;i++)
     {
         if(currencies[i]['code'] == "USD"){
             return true;
         }
     }  
}).map(({name}) => name);
console.log("Countries with currency code USD are: ", cur);
 
}
xhr.send();
}

getContries();
