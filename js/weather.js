const API_KEY = "eae632d0ecba35543cdc1fb5ff0685b0";


function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    
    console.log(position);
    console.log(lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    
    // fetch()  ->  자바스크립트가 해당 url의 정보를 가져와줌(불러옴)
    // then()을 사용하는 이유 -> 자바스크립트는 비동기처리 방식으로 작동되는데 만약 특정 동작이 끝나지도 않고 다음 동작을 실행하게 됬을때 오류를 방지하기 위함
    fetch(url).then(response => response.json())
    .then(data => {
        const weather = document.querySelector("#weather span:nth-child(2)");
        const city = document.querySelector("#weather span:last-child");
        
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
        city.innerText = data.name;
    })  
}


function onGeoError(){
    alert("Can't find you. No weather for you.")
}



navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);