let cityElement = document.getElementById('city');
let windElement = document.getElementById('wind');
let humElement = document.getElementById('hum');
let tempElement = document.getElementById('temp');

function fetchData() {
    let cityname= document.getElementById('cityInput').value;
    let key = '5069706d3767718e2735f75048e772c8';

    let api = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${key}`;

    fetch(api)
        .then(response => response.json())
        .then(data => {

            cityElement.innerHTML = data.name;
            windElement.innerHTML = data.wind.speed;
            humElement.innerHTML = data.main.humidity;
            tempElement.innerHTML = (data.main.temp - 273).toFixed(2);

        });
    
}



