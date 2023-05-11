const apiKey = "ca8c7cb6a362e575452110a3d2064701"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`)
    var data = await response.json()
    console.log(data);

    document.querySelector(".city").innerHTML = data.name
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)  +"°C"
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%"
    document.querySelector(".wind").innerHTML = data.wind.speed +"km/h"

    weather = data.weather[0].main.toLowerCase()
    weatherIcon.src = "images/"+ weather +".png"
    backroungUrl = "background/" + weather + ".jpg";
    document.body.style.backgroundImage = "url(" + backroungUrl + ")";
    
    
}

searchBtn.addEventListener('click', ()=>{
    checkWeather(searchBox.value)
})