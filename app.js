const express = require('express');
const https = require("https");
const bodyParser = require("body-parser");


const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {

    res.sendFile(__dirname + "/index.html");

});

app.post("/", function (req, res) {
     res.send();
 console.log(req.body.cityName);


});

// const query = "London ";
// const apiKey = "ff7d2b38c7f29c6704ab8b488fc65618";
// const unit = "metric"
// const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query  +  "&APPID=" + apiKey + "&units=" +unit ;
//     https.get(url , function(response){
//     console.log(response.statusCode);
//     response.on("data", function(data){
//         const WeatherData = JSON.parse(data);

//         console.log(WeatherData);
//         const weatherDescription = WeatherData.weather[0].description;
//         const temp = WeatherData.main.temp;
//         const icon = WeatherData.weather[0].icon;
//         const imageUrl = "https://openweathermap.org/img/wn/" + icon + "@2x.png";

//         res.write("<p>Currently the weather is " + weatherDescription + "</p>");
//         res.write("<h1>The temperature in " + query + "is " + temp + " degree celcius</h1>");
//         res.write("<img src =" + imageUrl + ">")
//       res.send();
//     });


// });


app.listen(3000, function () {
    console.log("Server started at 3000 port");
})