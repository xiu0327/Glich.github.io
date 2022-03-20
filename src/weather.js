const API_KEY = "e9c2e8ef7b5e8027fb6870092e99fe4c"; //배포 후 삭제 예정

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const longit = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${longit}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(response => response.json())
    .then((data) => 
        {
            const weatherText = document.querySelector(".weather");
            const name = data.name;
            const weather = data.weather[0].main;
            weatherText.innerText = `현재 지역 : ${name}  /  현재 날씨 : ${weather}`;
        }
    );
}
function onGeoError() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);