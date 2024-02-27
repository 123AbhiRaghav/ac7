const request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all",true);
request.send();
request.onload = function() {
    var countryData = JSON.parse(this.response);
    const population = countryData.filter((item)=>{
        return item.population<200000;
    })
console.log(population);}