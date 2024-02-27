const request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all",true);
request.send();
request.onload = function() {
    var countryData = JSON.parse(this.response);
    const population = countryData.reduce((accum,value)=>{
        return accum+value.population;
    })
console.log(population);
}