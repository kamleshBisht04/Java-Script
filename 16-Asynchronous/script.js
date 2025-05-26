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

/* 

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

 */

/////////////////////////////////////////////////////////////
///////////////////////////////////////
// Coding Challenge #1

/* 
In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

Here are your tasks:

PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}.
The AJAX call will be done to a URL with this format: https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=52.508&longitude=13.381. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and log errors to the console
5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.

PART 2
6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474

GOOD LUCK 😀
*/

// const whereAmI = function (lat, lng) {
//   fetch(
//     `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`
//   )
//     .then(res => {
//       if (!res.ok) throw new Error(`Problem with Geocoding ${res.status}`);
//       return res.json();
//     })
//     .then(data => {
//       console.log(data);
//       console.log(`You are in ${data.city}, IN ${data.continent} Continent.`);

//       return fetch(`https://restcountries.com/v3.1/name/${data.countryName}`);
//     })
//     .then(response => {
//       if (!response.ok) throw new Error(`Country not found ${response.status}`);

//       return response.json();
//     })
//     .then(data => rendringCountry(data[0]))
//     .catch(err => consorl.error(`${err.message}💥`));
// };

// btn.addEventListener('click', function () {
//   whereAmI(52.508, 13.381);
//   whereAmI(19.037, 72.873);
//   whereAmI(-33.933, 18.474);
// });

//////////////////////////////////////////////////////////////////////////////

/*

// The event loop in practice
// micro task queue
console.log('Test start');
setTimeout(() => console.log('0 sec timmer'), 0);
Promise.resolve('Resolved promise 1 ').then(res => console.log(res));

Promise.resolve('Resolved promiss 2').then(res => {
  for (let i = 1; i <= 1000000000; i++) {}
  console.log(res);
});

console.log('Test end.');

// result
// test start=>
// test end =>
// resolved promise 1=>
// 0 sec timmer

*/

///////////////////////////////////////////////////////
/* 
// Building a simple promise
// executor function
// incoprate the ashrynchronous behaviour in promise

const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('Lotter draw happening 🔮');
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve('You win 💰💰');
    } else {
      reject('you lost your money 👎💢');
    }
  }, 2000);
});

// consumeing the promise
lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// promisefying =>convert callback asynchronous behaviour to promise based

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(1)
  .then(() => {
    console.log('1 second passed');
    return wait(1);
  })
  .then(() => {
    console.log(' 2 second passed');
    return wait(1);
  })
  .then(() => {
    console.log(' 3 second passed');
    return wait(1);
  })
  .then(() => {
    console.log(' 4 second passed');
  });

  // easy fullfilled and rejectied promiss imiditly 
  // static method on promiss constructor
  Promise.resolve('abc').then(res=> console.log(res));
  Promise.reject(new Error('Problem!!')).catch(res=> console.error(res)); 
  
  */
//////////////////////////////////////////////
// asynchronous behaviour

// navigator.geolocation.getCurrentPosition(
//   position => console.log(position),
//   err => console.error(err)
// );

// console.log('Getting position');

// Promissfy

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   position => resolve(position),
    //   err => reject(err)
    // );
    ////same as below
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

getPosition().then(pos => console.log(pos));

//////////////////////////////////////////////

const whereAmI = function () {
  getPosition()
    .then(pos => {
      const {latitude :lat, longitude :lng } = pos.coords;
      console.log(pos.coords);
      return fetch(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`
      );
    })
    .then(res => {
      if (!res.ok) throw new Error(`Problem with Geocoding ${res.status}`);
      return res.json();
    })
    .then(data => {
      console.log(data);
      console.log(`You are in ${data.city}, IN ${data.continent} Continent.`);

      return fetch(`https://restcountries.com/v3.1/name/${data.countryName}`);
    })
    .then(response => {
      if (!response.ok) throw new Error(`Country not found ${response.status}`);

      return response.json();
    })
    .then(data => rendringCountry(data[0]))
    .catch(err => console.error(`${err.message}💥`));
};
btn.addEventListener('click', whereAmI);
