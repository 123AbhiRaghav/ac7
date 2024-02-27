const req = new XMLHttpRequest();
req.open("GET", "https://restcountries.com/v3.1/all",true);
req.send();
req.onload = function() {
    var countryData = JSON.parse(this.response);
    const asia = countryData.filter((a)=>{
        if(a.region==="Asia"){
            return a.name
        }
    })
console.log(asia);}