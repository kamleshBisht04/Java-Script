'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// NEW COUNTRIES API URL (use instead of the URL shown in videos):
// https://restcountries.com/v2/name/portugal

// NEW REVERSE GEOCODING API URL (use instead of the URL shown in videos):
// https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}

///////////////////////////////////////


const getCountryData= function(country){
    const request = new XMLHttpRequest();
    request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
    request.send();
    request.addEventListener('load', function () {
        const [data] = JSON.parse(this.responseText);
        console.log(data);
        // html handling
        const flag =data.flags.png;
        const region=data.region;
        const population=+(data.population/1000000).toFixed(1);
        const countryName=data.name.common;
        const languages = Object.values(data.languages).at(0);
        const currencies = Object.values(data.currencies).at(0).name;

        const html = `
        <article class="country">
        <img class="country__img" src="${flag}" />
        <div class="country__data">
        <h3 class="country__name">${countryName}</h3>
        <h4 class="country__region">${region}</h4>
        <p class="country__row"><span>👫</span>${population} million people</p>
        <p class="country__row"><span>🗣️</span>${languages}</p>
        <p class="country__row"><span>💰</span>${currencies}</p>
        </div>
        </article>
        `;
        countriesContainer.insertAdjacentHTML("beforeend",html);
        countriesContainer.style.opacity =1;
        
    });
}
getCountryData('india');
getCountryData('usa');
getCountryData('uk');
getCountryData('chine');



