a.Get all the countries from Asia continent /region using Filter function

 fetch("https://restcountries.com/v3.1/all")
 .then(data => data.json())
 .then((countries) => 
      countries
     .filter((country)=>country.region == "Asia")
     .map((country)=>country.name.common)
    )
 .then(countries => console.log(countries))
 .catch(err=> console.log("please try after sometime!!!"));

b.Get all the countries with a population of less than 2 lakhs using Filter function

 fetch("https://restcountries.com/v3.1/all")
 .then(data => data.json())
 .then((countries) => 
      countries
     .filter((country)=>country.population < 200000)
     .map((country)=>country.name.common)
    )
 .then(countries => console.log(countries))
 .catch(err=> console.log("please try after sometime!!!"));

c.Print the country which uses US Dollars as currency.

 fetch("https://restcountries.com/v3.1/all")
 .then(data => data.json())
 .then((countries) => 
      countries
     .filter((country)=>country.currencies.name:dollarname == "United States dollar")
     .map((country)=>country.name)
   )
.then(countries => console.log(countries))
.catch(err=> console.log("please try after sometime!!!"));

d.Print the following details name, capital, flag using forEach function

async function getCountries() {
    let url = "https://restcountries.com/v3.1/all";
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function renderCountries() {
    let countries = await getCountries();
    let html = '';
    countries.forEach(country => {
        let htmlSegment = `<div class="user">
        <h2>${country.name.common}</h2>
        <p>Capital: ${country.capital}</p>     
        <img src="${country.flags.png}" >
        <hr/>   
        </div>`;

        html += htmlSegment;
    });

    let container = document.querySelector('.container');
    container.innerHTML = html;
}

renderCountries();

e.Print the total population of countries using reduce function
.then(responses=> {
    return responses.reduce(async(acc, next) => {
        acc.push(await(next.json()));
        return acc;
    }, [])
})
