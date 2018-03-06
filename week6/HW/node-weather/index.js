let apiKey = '859dd915fbeed6d12c75e1ad595bf2ae';
let city = 'new york';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`

const request = require('request');
request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    console.log('body:', body);
    let weather = JSON.parse(body);
    let message = `It's ${weather.weather[0].main} ${weather.main.temp} degrees in ${weather.name}!`;
    console.log(message);
  }
});