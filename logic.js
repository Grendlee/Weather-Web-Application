let returnedLongANDLatANDAccuracyJSON;
let lat;
let lng;
let weatherJSON;
let windAngle;
let windSpeed;


async function getLocationWeather() 
{
    if (navigator.geolocation) 
    {
        navigator.geolocation.getCurrentPosition(assignOpenWeatherJSON);
    } else 
    {
        console.log("Geolocation is not supported by this browser.");
    }
}
        
async function assignOpenWeatherJSON(position) {
    lat = position.coords.latitude;
    lng = position.coords.longitude;
    console.log("Lat : " + lat + " Lon: " + lng);
    

    await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${'Your API Key'}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            weatherJSON = data;
            windAngle = weatherJSON.wind.deg;
            windSpeed = weatherJSON.wind.speed;
        })
        .catch(error => console.error(error));
        
    displayWindData();
}

async function displayWindData()
{
    console.log("wind angle: " + windAngle);
    console.log("wind speed: " + windSpeed);
    


}


getLocationWeather();








