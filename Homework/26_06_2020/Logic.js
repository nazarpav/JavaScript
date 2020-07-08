const Name = document.getElementById("Name");
const Surname = document.getElementById("Surname");
const PhoneNumber = document.getElementById("PhoneNumber");
const Country = document.getElementById("Country");
const NameCopy = document.getElementById("NameCopy");
const SurnameCopy = document.getElementById("SurnameCopy");
const PhoneNumberCopy = document.getElementById("PhoneNumberCopy");
const CountryCopy = document.getElementById("CountryCopy");
const Countries = document.getElementById("Countries");
let CountriesArray;

document.addEventListener("DOMContentLoaded", () => {
    CountriesArray = GetCountries();
    Name.addEventListener("keyup", () => {
        console.log("press");
        NameCopy.innerHTML = Name.value;
    });
    Surname.addEventListener("keyup", () => {
        console.log("press");
        SurnameCopy.innerHTML = Surname.value;
    });
    PhoneNumber.addEventListener("keyup", () => {
        console.log("press");
        PhoneNumberCopy.innerHTML = PhoneNumber.value;
    });
    Country.addEventListener("keyup", () => {
        console.log("press");
        CountryCopy.innerHTML = Country.value;
        UpdateCountryList(Country.value);
    });
});

function GetCountries() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'country.json', false);
    xhr.send();
    if (xhr.status !== 200) {
        return {};
    } else {
        return JSON.parse(xhr.responseText);
    }
}

function UpdateCountryList(CountryName) {
    console.log("Upd");
    var ul = document.createElement('ul');
    CountriesArray.forEach(function(item) {
        if (item.country.toUpperCase().startsWith(CountryName.toUpperCase()) && CountryName.length > 0) {
            var li = document.createElement('li');
            li.innerText = item.country;
            ul.appendChild(li);
        }
    });
    Countries.innerHTML = ul.outerHTML;
}