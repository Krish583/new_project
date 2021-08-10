let url = 'https://restcountries.eu/rest/v2/all';
console.log("Hello World!");

fetch(url)
.then(res => res.json())
.then((out) => {
 const asia=out.filter((n) => n.region == "Asia").map((nm)=>nm.name);
 console.log("Asia countries are: ", asia);
 const count=out.filter((n) => n.population < 200000).map((nm)=>nm.name);
 console.log("Population of countries less than 2 Lakhs are: ", count);
 const reducer = (accumulator, currentValue) => accumulator + currentValue;
 total = out.map((n)=>n.population).reduce(reducer);
 console.log(" Total Popualation in the world:", total)
 const cur=out.filter((n) => {
     for(let i=0;i<n.currencies.length;i++)
     {
         if(n.currencies[i]['code'] == "USD"){
             return true;
         }
     }  
 }).map((nm)=>nm.name);
 console.log("Countries with currency code USD are: ", cur);
console.log(" Country Name  Captial  Flag")
 out.foreach(function(item){

    console.log(item.name +" "+item.capital+" " + item.flag)
    
    })
})
.catch(err => { throw err });

// Print the following details name, capital, flag using forEach function




