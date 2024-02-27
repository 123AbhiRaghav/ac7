const request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all",true);
request.send();
request.onload = function() {
    var countryData = JSON.parse(this.response);
    const curr = countryData.filter((cur)=>cur.currencies && cur.currencies.USD)
    curr.forEach((usd)=> console.log(usd.name.common));
}