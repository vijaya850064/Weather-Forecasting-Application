async function getWeather() {

    let city = document.getElementById("cityInput").value;
    if(city==="")return;

    let apiKey="63eb8fce8fae846d60c174005e9a4289";
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    
    try{
        let response = await fetch(url);
        let data=await response.json();
        if (data.cod===200){
            document.getElementById("weatherResult").innerHTML=
            `Temperature: ${data.main.temp} C <br> Condition: ${data.weather[0].description}`;
        }
        else{
            document.getElementById("weatherResult").innerHTML="City not Found";
        }
    }   catch(error){
        console.error("error fetching data:",error);
        document.getElementById("weatherResult").innerHTML="Error fetching data";    }
}