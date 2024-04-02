const selectCountry = document.querySelector(".container")
const countryContainer = document.querySelector(".country-container")
const countryList = document.querySelector(".country-list") 
const input = document.querySelector(".input")
let searchCountry = ""
const countries =[
    {id:1 , country:"America"},
    {id:2 , country:"Australiya"},
    {id:3 , country:"Afgh"},
    {id:4 , country:"India"},
    {id:5 , country:"China"},
    {id:6 , country:"Maldiv"},
    {id:7 , country:"Japan"},
];

function showCountries(){
    for(let country of countries){
        const name = document.createElement("p");
        name.classList.add("name")
        name.innerText =country.country;
        countryList.appendChild(name);
    }
}

showCountries(countries);
const handleChange =(event)=>{
    searchCountry = event.target.value.toLowerCase()
    const filterBySearch = countries.filter(({country})=>{
        country.toLowerCase().startsWith(searchCountry)
    })

    countryList.innerText ="";
    showCountries(filterBySearch)
}
selectCountry.addEventListener("click",()=>{
    countryContainer.classList.toggle("hide");
})
input.addEventListener("keyup",handleChange)

