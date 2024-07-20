let result = document.getElementById("result");
let searchBtn = document.getElementById("search-btn");
let cityref = document.getElementById('city');

let getweather = () => {
    let cityvalue = cityref.value; 
    if (cityvalue.length == 0) {
        result.innerHTML = `<h3 class="error">Please enter a correct city name</h3>`;
    }
    else{
        let url =`https://api.openweathermap.org/data/2.5/weather?q=${cityvalue}&appid=${key}&units=metric`;
        cityref.Value="";
        fetch(url)
        .then ((resp) => resp.json())
        .then((data)=>{
            console.log(data);
            console.log(data.weather[0].icon);
            console.log(data.weather[0].main);
            console.log(data.weather[0].description);
            console.log(data.name);
            console.log(data.main.temp_min);
            console.log(data.main.temp_max);
            result.innerHTML =`<h2>${data.name}</h2>
            <h4 class="weather">${data.weather[0].main}</h4>
            <h4 class="desc">${data.weather[0].description}</h4>
            img src="https://openweathermap.org/img/w/2x${data.weather[0].icon}.png"
            <h1>${data.main.temp} &#176;</h1>
            <div class="temp-container">
            <div>
            <h4 class="tittle">min</h4>
            <h4 class="temp">${data.main.temp_min}&#176;</h4>
            </div>
            <div>
            <h4 class="tittle">max</h4>
            <h4 class="temp">${data.main.temp_max}&#176;</h4>
            </div>
            </div>`;
        }).catch(()=>{result.innerHTML =`<h3 class ="error">city not found</h3>`;})
    }
};
searchBtn.addEventListener("click",getweather);
window.addEventListener("load",getweather);