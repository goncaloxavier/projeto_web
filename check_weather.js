"use strict";

const API_KEY = "ffdbb02b57b503636bd8167d07e614aa";
const API_URL = "https://api.openweathermap.org/data/2.5/weather?";

function pesquisar(){
    var search_keyword = $("#input-pesquisa").val();

    var search = "https://api.openweathermap.org/data/2.5/weather?units=metric&lang=portuguese&appid=ffdbb02b57b503636bd8167d07e614aa&q=" + search_keyword;

    $.getJSON(
        search,
        function (data) {
            console.log(data);

            var icon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
            var temp = data.main.temp;
            var weather = data.weather[0].main;

            console.log(icon);

            $('.icon').attr('src', icon);
            $('.temperatura').text(temp);


            /*switch (weather) {
                case "Clear":
                    weather = "Céu Limpo";
                    break;
                case "Mostly Clear":
                case "Mostly Sunny":
                    weather = "Principalmente Limpo";
                    break;
                case "Partly Cloudy":
                case "Partly Sunny":
                    weather = "Parcialmente Nublado";
                    break;
                case "Mostly Cloudy":
                    weather = "Principalmente Nublado";
                    break;
                case "Clouds":
                    weather = "Nublado";
            }*/

            $('.descricao').text(weather);
        }
    )
}