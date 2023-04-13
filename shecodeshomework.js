// let weather = {
//   paris: {
//     temp: 19.7,
//     humidity: 80,
//   },
//   tokyo: {
//     temp: 17.3,
//     humidity: 50,
//   },
//   lisbon: {
//     temp: 30.2,
//     humidity: 20,
//   },
//   "san francisco": {
//     temp: 20.9,
//     humidity: 100,
//   },
//   oslo: {
//     temp: -5,
//     humidity: 20,
//   },
// };

// function respondToUser() {
//   let city = prompt("Enter a City?");
//   city = city.toLowerCase().trim();

//   if (weather[city]) {
//     alert(
//       `It is currently ${weather[city].temp}°C (${Math.round(
//         weather[city].temp * 1.8 + 32
//       )}°F) in ${city} with a humidity of ${weather[city].humidity}%`
//     );
//   } else {
//     alert(
//       "Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+sydney"
//     );
//   }
// }

// respondToUser();

let now = new Date();

let h1 = document.querySelector("#currentDate");
let hour = now.getHours();
let minutes = now.getMinutes();

let days = ["Sun", "Tue", "Wed", "Thur", "Fri", "Sat"];
let day = days[now.getDay()];

h1.innerHTML = `${day} ${hour}:${minutes}`;

function searchCity(event) {
  event.preventDefault();
  let inputSearch = document.querySelector("#citySearch");
  let h1 = document.querySelector("#countryCity");

  let apiLastpoint = "https://api.openweathermap.org/data/2.5/weather?";
  let cityName = inputSearch.value;
  let apiKey1 = "5981bb6e099bf047fb0ade85502f44fa";
  let units1 = "metric";
  let apiUrl1 = `${apiLastpoint}q=${cityName}&appid=${apiKey1}&units=${units1}`;
  function showTemperature(response) {
    console.log(response.data);

    let displayTemp = Math.round(response.data.main.temp);
    let displayCity = response.data.name;
    let temperature = document.querySelector(".nineteen");
    temperature.innerHTML = `${displayTemp}`;
    if (inputSearch.value) {
      h1.innerHTML = ` ${displayCity}`;
    } else {
      h1.innerHTML = null;
    }
  }
  axios.get(apiUrl1).then(showTemperature);
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", searchCity);

//function changeValue(event) {
// event.preventDefault();

// let nineteenSpan = document.querySelector(".nineteen");
//nineteenSpan.innerHTML = 66;
//}
//let link = document.querySelector(".fahren");

//link.addEventListener("click", changeValue);

function showPosition(position) {
  console.log(position);

  let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather?";
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiKey = "5981bb6e099bf047fb0ade85502f44fa";
  let units = "metric";

  let apiUrl = `${apiEndpoint}lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;

  function showTemperature(response) {
    console.log(response.data);
    console.log(response.data.main.temp);
    let displayCurrentTemp = Math.round(response.data.main.temp);
    let displayCurrentCity = response.data.name;
    let currentButton = document.querySelector(".nineteen");
    let currentCityButton = document.querySelector("#countryCity");
    currentCityButton.innerHTML = `${displayCurrentCity}`;
    currentButton.innerHTML = `${displayCurrentTemp}`;
  }
  axios.get(apiUrl).then(showTemperature);
}

let buttonClick = document.querySelector("button");
buttonClick.addEventListener("click", function () {
  navigator.geolocation.getCurrentPosition(showPosition);
});
