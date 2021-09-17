const api ={
  key: "97ffc400e984ddd9e064a706182c6a54",
  base :"http://api.openweathermap.org/data/2.5/"
}

const searchbox = document.querySelector(".search-box");
searchbox.addEventListener('keypress', function(evt) {
   if (evt.keyCode ==13) {
console.log(evt.keyCode);
    // console.log(searchbox.value);
    getResults(searchbox.value);
   }
});
getResults('Nagpur');
function getResults(query){
  fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
  .then((weather) => {
    return weather.json();
  }).then(displayResults);
}
function displayResults(weather){
  // console.log(weather);
  let city = document.querySelector('.location .city');
  city.innerHTML = `${weather.name} , ${weather.sys.country}`;
  let now = new Date();
  let date = document.querySelector('.date');
  date.innerHTML = todayDate(now);

  let temp = document.querySelector('.temp');
  temp.innerHTML = `${Math.round(weather.main.temp)} <span>°c</span>`;

  const weather_el = document.querySelector(".current .weather");
 weather_el.innerText = weather.weather[0].main;
 const hilow = document.querySelector(".hi-low");
 hilow.innerText = `${Math.round(weather.main.temp_min)}°c / ${Math.round(
   weather.main.temp_max
 )}°c`;
}

function todayDate(d){
  // console.log(d);
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day} ${date} ${month} ${year}`;
}
