'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const rendringCountry = function (data, className = '') {
  // html handling
  const flag = data.flags.png;
  const region = data.region;
  const population = +(data.population / 1000000).toFixed(1);
  const countryName = data.name.common;
  const languages = Object.values(data.languages).at(0);
  const currencies = Object.values(data.currencies).at(0).name;

  const html = `
        <article class="country ${className}">
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
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const rendringError = function (message) {
  countriesContainer.insertAdjacentText('beforeend', message);
  countriesContainer.style.opacity = 1;
};

// NEW COUNTRIES API URL (use instead of the URL shown in videos):
// https://restcountries.com/v2/name/portugal

// NEW REVERSE GEOCODING API URL (use instead of the URL shown in videos):
// https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}

///////////////////////////////////////

// first AJAX call reandering the country data

// const getCountryData= function(country){
//     const request = new XMLHttpRequest();
//     request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//     request.send();
//     request.addEventListener('load', function () {
//         const [data] = JSON.parse(this.responseText);
//         console.log(data);
//         // html handling
//         const flag =data.flags.png;
//         const region=data.region;
//         const population=+(data.population/1000000).toFixed(1);
//         const countryName=data.name.common;
//         const languages = Object.values(data.languages).at(0);
//         const currencies = Object.values(data.currencies).at(0).name;

//         const html = `
//         <article class="country">
//         <img class="country__img" src="${flag}" />
//         <div class="country__data">
//         <h3 class="country__name">${countryName}</h3>
//         <h4 class="country__region">${region}</h4>
//         <p class="country__row"><span>👫</span>${population} million people</p>
//         <p class="country__row"><span>🗣️</span>${languages}</p>
//         <p class="country__row"><span>💰</span>${currencies}</p>
//         </div>
//         </article>
//         `;
//         countriesContainer.insertAdjacentHTML("beforeend",html);
//         countriesContainer.style.opacity =1;

//     });
// }
// getCountryData('india');
// getCountryData('usa');
// getCountryData('uk');
// getCountryData('chine');

/////////////////////////////////////////

// callBack hell

// callBack hell start

// const getCountryAndNeighbour = function (country) {
//   //AJAx call 1
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();
//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//     // rendring country data 1
//     rendringCountry(data);

//     // get neighbour country Ajax call 2 callBack hell
//     const [neighbour] = data.borders;
// data.borders
//     if (!neighbour) return;
//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
//     request2.send();
//     request2.addEventListener('load', function () {
//       const [data2] = JSON.parse(this.responseText);
//       console.log(data2);
//       rendringCountry(data2, 'neighbour');
//     });
//   });
// };

// getCountryAndNeighbour('india');
// getCountryAndNeighbour('usa');

// another example of callBack hell

// setTimeout(
//   () => console.log('1 second passed'),
//   setTimeout(
//     () => console.log('2 second passed'),
//     setTimeout(
//       () => console.log('3 second passed'),
//       setTimeout(() => console.log('4 second passed'), 4000),
//       3000
//     ),
//     2000
//   ),
//   1000
// );

//////////////////////////////////////////

//CONSUME  PROMISS
/*

// how it will return promiss

// const request = fetch('https://restcountries.com/v3.1/name/india');
// console.log(request);

// country data

// const countryInfo = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       rendringCountry(data.at(0));
//     });
// };

// above By arrow function

const countryInfo = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => response.json())
    .then(data => {
      // console.log(data);
      rendringCountry(data[0]);
    });
};

// countryInfo('india');
// countryInfo('usa');
// countryInfo('India');
// countryInfo('portugal');

//////////////////////////////////////
//CHAINING OF PROMISS

const getCountryData = function (country) {
  // country 1
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(res => res.json())
    .then(data => {
      rendringCountry(data[0]);
      const neighbour = data[0].borders?.[0];
      if (!neighbour) return;
      // country 2
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then(res => res.json())
    .then(data => rendringCountry(data[0], 'neighbour'));
};

// getCountryData('India');
// getCountryData('usa');

///// RETURN ALL NEIGHBOUR COUNTRY USING FOR EACH

///////////////////////////////////////////////////

const getCountryData1 = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(res => res.json())
    .then(data => {
      rendringCountry(data[0]);
      const neighbour = data[0].borders;

      if (!neighbour) return;
      console.log(neighbour);
      return neighbour.forEach(neighbour =>
        fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`)
          .then(res => res.json())
          .then(data => rendringCountry(data[0], 'neighbour'))
      );
    });
};
// getCountryData1('India');
// getCountryData1('usa');
// getCountryData1('United Kingdom');

/////////////////////////////////////////////////

//HANDLING THE REJECT PROMISS // when user looses the internet connection



const getsCountryData = function (country) {
  // country 1
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(res => res.json())
    .then(data => {
      rendringCountry(data[0]);
      const neighbour = data[0].borders?.[0];
      if (!neighbour) return;
      // country 2
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then(res => res.json())
    .then(data => rendringCountry(data[0], 'neighbour'))
    // handling the reject promiss
    .catch(err => {
      console.error(`${err}`);
      rendringError(
        `Something went wrong ${err.message} 💥💥💥💥💥.Try Agian!`
      );
    })
    // execute definatlly catch return also promiss
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

// btn.addEventListener('click', function () {
//   getsCountryData('india');
// });

*/

///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////

// Throwing error manually 404 error

// const getCountryData1 = function (country) {
//   // country 1
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(response => {
//       // handling the error manually important
//       // console.log(response);
//       if (!response.ok) throw new Error(`Country not Found ${response.status}`);

//       return response.json();
//     })
//     .then(data => {
//       rendringCountry(data[0]);
//       // const neighbour = data[0].borders?.[0];
//       const neighbour = 'aassddff';
//       if (!neighbour) return;
//       // country 2
//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//     })
//     .then(response => {

//       response.json();
//       if (!response.ok) throw new Error(`Country not Found ${response.status}`);

//     })
//     .then(data => rendringCountry(data[0], 'neighbour'))
//     // handling the reject promiss
//     .catch(err => {
//       // console.error(`${err} 💥💥💥`);
//       rendringError(
//         `Something went wrong ${err.message} 💥💥💥💥💥.Try Agian!`
//       );
//     })
//     // execute definatlly catch return also promiss
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// btn.addEventListener('click', function () {
//   getCountryData1('india');
// });

// getCountryData1('ssddhhjk');

//////////////////////////////////////////////////////
////// above the code is reference and create a getJSON method

// making seprate function to hold the error and mesage 404
const getJSON = function (url, errMsg = 'Something went wrong  ') {
  return fetch(url).then(response => {
    // manually handle the 404 error
    if (!response.ok) throw new Error(`${errMsg} ${response.status}`);

    return response.json();
  });
};

const getCountryData1 = function (country) {
  // country 1
  getJSON(
    `https://restcountries.com/v3.1/name/${country}`,
    'Country not Found!'
  )
    .then(data => {
      rendringCountry(data[0]);
      const neighbour = data[0].borders?.[0];
      // const neighbour = 'aassddff';
      if (!neighbour) throw new Error('No Neighbour');
      // country 2
      return getJSON(
        `https://restcountries.com/v3.1/alpha/${neighbour}`,
        'Country not Found !'
      );
    })
    .then(data => rendringCountry(data[0], 'neighbour'))
    // handling the reject promiss
    .catch(err => {
      // console.error(`${err} 💥💥💥`);
      rendringError(
        `Something went wrong ${err.message} 💥💥💥💥💥.Try Agian!`
      );
    })
    // execute definatlly catch return also promiss
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function () {
  getCountryData1('india');
});

// getCountryData1('ssddhhjk');
getCountryData1('Australia');
