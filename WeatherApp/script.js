const apiKey = "e6cc9632624ce9983bfd3938ce5e7aa9";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city) {
   try{
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    console.log(response)
    if (response.status == 404) {
        document.querySelector(".error").style.display= "block";
        document.querySelector(".weather").style.display= "none";
    } else {

    let data = await response.json();
    console.log(data)

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "images/cloudy.svg"
    }
     else if (data.weather[0].main == "Clear") {
         weatherIcon.src = "images/day.svg"
    } 
    else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "images/rainy.svg"
   } 
   else if (data.weather[0].main == "Mist") {
    weatherIcon.src = "images/snowymist.svg"
   }      
   else{

   }


   document.querySelector(".weather").style.display = "block";
   document.querySelector(".error").style.display = "none";
    
    }
   } catch(error){
    console.error("Erreur lors de la récupération des données:",error)
   }

    
}


searchBtn.addEventListener("click", ()=> {
    checkWeather(searchBox.value);
})