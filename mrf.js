let url = 'https://restcountries.eu/rest/v2/all';

fetch(url)
.then(res => res.json())
.then((out) => {

// a. Get all the countries from Asia continent /region using Filter function
const asia=out.filter(({region}) => region == "Asia").map(({name}) => name);
console.log("Asia countries are: ", asia);

//b. Get all the countries with a population of less than 2 lakhs using Filter function
const count=out.filter(({population}) => population < 200000).map(({name}) => name);
console.log("Population of countries less than 2 Lakhs are: ", count);

//c. Print the following details name, capital, flag using forEach function
console.log("Country_Name - Captial  - Flag")
Object.entries(out).forEach((entry) => {
    let name=entry[1].name;
    let flag=entry[1].flag;a
    let capital = entry[1].capital;
  console.log(name +" - "+capital+" - "+flag);
  });
 
//d. Print the total population of countries using reduce function
const reducer = (accumulator, currentValue) => accumulator + currentValue;
total = out.map(({population})=>population).reduce(reducer);
console.log("Total Popualation in the world:", total)

//e. Print the country which uses US Dollars as currency
const cur=out.filter(({currencies}) => {
     for(let i=0;i<currencies.length;i++)
     {
         if(currencies[i]['code'] == "USD"){
             return true;
         }
     }  
}).map(({name}) => name);
console.log("Countries with currency code USD are: ", cur);
 
})
.catch(err => { throw err });
