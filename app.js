// Init LS
const storage = new Storage();
//Get stored location data
const weatherLocation = storage.getLocationData();

//Init weather object

const weather = new Weather(weatherLocation.city, weatherLocation.state);

const ui = new UI();

//change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;

  //change location
  weather.changeLocation(city, state);

  //set location in LS
  storage.setLocationData(city, state);

  //Get Weather
  getWeather();

  //close moddal
  $('#locModal').modal('hide');
});

// Get eather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);


function getWeather() {
  weather.getWeather()
  .then(results => {
    ui.paint(results);
  })
  .catch(err => console.log(err));
}
