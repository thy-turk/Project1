var timeFormat = 'MM/DD/YYYY HH:mm';

function newDate(days) {
    return moment().add(days, 'd').toDate();
}

function newDateString(days) {
    return moment().add(days, 'd').format(timeFormat);
}
var color = Chart.helpers.color;
var config = {
    type: 'line',
    data: {
        labels: [ // Date Objects
            newDate(0),
            newDate(1),
            newDate(2),
            newDate(3),
            newDate(4),
            newDate(5),
            newDate(6)
        ],
        datasets: [{
            label: 'Temperature',
            backgroundColor: color("224, 12, 12").alpha(0.5).rgbString(),
            borderColor: "224, 12, 12",
            fill: false,
            data: [
                5,
                5,
                6,
                1,
                22,
                14,
            ],
        },{
            label: 'Dataset with point data',
            backgroundColor: color("green").alpha(0.5).rgbString(),
            borderColor: "green",
            fill: false,
            data: [{
                x: newDateString(0),
                y: 4
            }, {
                x: newDateString(5),
                y: 5
            }, {
                x: newDateString(7),
                y: 6
            }, {
                x: newDateString(15),
                y: 7
            }],
        }]
    },
    options: {
        title: {
            text: 'Weather Conditions this Week'
        },
        scales: {
            xAxes: [{
                type: 'time',
                time: {
                    parser: timeFormat,
                    // round: 'day'
                    tooltipFormat: 'll HH:mm'
                },
                scaleLabel: {
                    display: true,
                    labelString: 'Date'
                }
            }],
            yAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Temperature'
                }
            }]
        },
    }
};

window.onload = function() {
    var ctx = document.getElementById('myChart').getContext('2d');
    window.myLine = new Chart(ctx, config);

};


// var resortId = ["20", "25", "36", "77", "113", "120", "1673", "143", "181", "197", "220", "240", "329",
//     "330", "1435", "372", "425", "445", "456", "482", "507", "511"];

// var temp;
// var windSpd;
// var weather;
// var userAddress = "";
// var resortAddress = "";

//   
// Copper 113, Crested Butte 120, echo mountain 1673, Eldora 143, GRANBY NO RESULT, Howelson 181, Loveland 220, 
// Monarch Mtn 240, PowderHorn 329, Purgatory 330, Silverton 1435, Ski Cooper 372, Steamboat 425, Sunlight Mtn 445, Telluride 456, 
// Vail 482, Winter Park 507, Wolf Creek 511,
// */

// homePage();


// // What happens when the copper button is clicked
// $('#copper-btn').on("click", function () {

//     // Function that shows and hides certain page elements
//     infoPage();

//     $('.mapDisplay').empty();

//     $(".toggler").prop("checked", false);
    
//     // $('.hamburger').on(‘click’, function () {
//     //     $(‘.menu’).addClass(‘open’);
//     // });
//     // $(‘.menu a’).on(“click”, function () {
//     // $(‘.menu’).removeClass(‘open’);
//     // });

// resortAddress = "209+Ten+Mile+Cir+Frisco+CO+80443";

// $(".widgetDisplay").html("<div class='ots-widget'><iframe id='o28858' width='960' height='150' border='0' frameborder='0' scrolling='no' src='https://www.onthesnow.com/widget/list?resorts=" + resortId[4] + "&color=b'></iframe><p><a href='https://www.onthesnow.com' target='_blank'>Powered by OnTheSnow.com</a></p></div>");

// // $(".mapDisplay").append("<iframe width='450' height='250' frameborder='0' style='border:0'src='https://www.google.com/maps/embed/v1/directions?key=AIzaSyBJKhf4GEm0R7YyUP7XmfM2KgVF6cTdz6M&origin=" + userAddress + "&destination=209+Ten+Mile+Cir+Frisco+CO+80443'allowfullscreen></iframe>")

// resortZip = "80443";
// var openWeatherQueryURL = "https://api.openweathermap.org/data/2.5/forecast?zip=" + resortZip + ",us&units=imperial&APPID=8945840c8250c919b4821b938074f3a6";

// // Ajax call using the open weather api
// $.ajax({
//     url: openWeatherQueryURL,
//     method: "GET"
// })
//     .then(function (response) {

//         var weatherArray = (response.list);
//         console.log(weatherArray[5]);
//         console.log(weatherArray[5].main.temp);
//         console.log(weatherArray[5].wind.speed);
//         console.log(weatherArray[5].weather[0].description);
//         temp = weatherArray[5].main.temp;
//         windSpd = weatherArray[5].wind.speed;
//         weather = weatherArray[5].weather[0].description;
//     })


// });

// // What happens when the keystone button is clicked
// $('#keystone-btn').on("click", function () {

//     infoPage();

//     $('.mapDisplay').empty();

//     $(".toggler").prop("checked", false);

//     resortAddress = "100+Dercum+Square+Keystone+CO+80435"

//     $(".widgetDisplay").html("<div class='ots-widget'><iframe id='o28858' width='960' height='150' border='0' frameborder='0' scrolling='no' src='https://www.onthesnow.com/widget/list?resorts=" + resortId[9] + "&color=b'></iframe><p><a href='https://www.onthesnow.com' target='_blank'>Powered by OnTheSnow.com</a></p></div>");

//     // $(".mapDisplay").append("<iframe width='450' height='250' frameborder='0' style='border:0'src='https://www.google.com/maps/embed/v1/directions?key=AIzaSyBJKhf4GEm0R7YyUP7XmfM2KgVF6cTdz6M&origin=2199+S+University+Blvd+Denver+CO+80208&destination=100+Dercum+Square+Keystone+CO+80435'allowfullscreen></iframe>")


//     resortZip = "80435";
//     var openWeatherQueryURL = "https://api.openweathermap.org/data/2.5/forecast?zip=" + resortZip + ",us&units=imperial&APPID=8945840c8250c919b4821b938074f3a6";

//     // Ajax call using the open weather api
//     $.ajax({
//         url: openWeatherQueryURL,
//         method: "GET"
//     })
//         .then(function (response) {

//             var weatherArray = (response.list);
//             console.log(weatherArray[5]);
//             console.log(weatherArray[5].main.temp);
//             console.log(weatherArray[5].wind.speed);
//             console.log(weatherArray[5].weather[0].description);
//             temp = weatherArray[5].main.temp;
//             windSpd = weatherArray[5].wind.speed;
//             weather = weatherArray[5].weather[0].description;
//         })


// });

// // What happens when the breck button is clicked
// $('#breckenridge-btn').on("click", function () {

//     infoPage();

//     $('.mapDisplay').empty();

//     $(".toggler").prop("checked", false);

//     resortAddress = "1599+Ski+Hill+Rd+Breckenridge+CO+80424";

//     $(".widgetDisplay").html("<div class='ots-widget'><iframe id='o28858' width='960' height='150' border='0' frameborder='0' scrolling='no' src='https://www.onthesnow.com/widget/list?resorts=" + resortId[3] + "&color=b'></iframe><p><a href='https://www.onthesnow.com' target='_blank'>Powered by OnTheSnow.com</a></p></div>");

//     // $(".mapDisplay").append("<iframe width='450' height='250' frameborder='0' style='border:0'src='https://www.google.com/maps/embed/v1/directions?key=AIzaSyBJKhf4GEm0R7YyUP7XmfM2KgVF6cTdz6M&origin=2199+S+University+Blvd+Denver+CO+80208&destination=1599+Ski+Hill+Rd+Breckenridge+CO+80424'allowfullscreen></iframe>")


//     var openWeatherQueryURL = "https://api.openweathermap.org/data/2.5/forecast?zip=" + "80424" + ",us&units=imperial&APPID=8945840c8250c919b4821b938074f3a6";

//     // Ajax call using the open weather api
//     $.ajax({
//         url: openWeatherQueryURL,
//         method: "GET"
//     })
//         .then(function (response) {

//             var weatherArray = (response.list);
//             console.log(weatherArray[5]);
//             console.log(weatherArray[5].main.temp);
//             console.log(weatherArray[5].wind.speed);
//             console.log(weatherArray[5].weather[0].description);
//             temp = weatherArray[5].main.temp;
//             windSpd = weatherArray[5].wind.speed;
//             weather = weatherArray[5].weather[0].description;
//         })


// });


// // what happens when the home button is clicked
// $('#home-btn').on("click", function () {
//     homePage();

//     // Emptying the divs so that dups aren't displayed if the same resort is chosen again
//     $('.widgetDisplay').empty();
//     $('.mapDisplay').empty();
//     $(".toggler").prop("checked", false);

// });

// // What happens when the address button is clicked
// $('#address-btn').on("click", function () {
//     event.preventDefault();


//     // Takes user input from the form and stores into variable
//     var userAddressRaw = $('#userAddress').val().trim();

//     // Replaces spaces in the user input so that it will work with the api
//     var userAddress = userAddressRaw.split(' ').join('+');
//     // We'll want to store this locally i think
//     $(".mapDisplay").html("<iframe width='910' height='600' frameborder='0' style='border:0'src='https://www.google.com/maps/embed/v1/directions?key=AIzaSyBJKhf4GEm0R7YyUP7XmfM2KgVF6cTdz6M&origin=" + userAddress + "&destination=" + resortAddress + "'allowfullscreen></iframe>")
//     $('.mapDisplay').show();

//     console.log(userAddress);
//     console.log(resortAddress);
// })


// function homePage() {
//     $('.widgetDisplay').hide();
//     $('.jumbotron').show();
//     $('#homepage-card').show();
//     $('.mapDisplay').hide();
//     $('.form-group').hide();
//     $('#address-btn').hide();
// }

// function infoPage() {
//     $('.jumbotron').hide();
//     $('.widgetDisplay').show();
//     $('#homepage-card').hide();
//     $('.form-group').show();
//     $('#address-btn').show();
// }


// function widgetCreate() {
//     $(".widgetDisplay").append("<div class='ots-widget'><iframe id='o28858' width='600' height='150' border='0' frameborder='0' scrolling='no' src='https://www.onthesnow.com/widget/list?resorts=" + resortId + "&color=b'></iframe><p><a href='https://www.onthesnow.com' target='_blank'>Powered by OnTheSnow.com</a></p></div>");

// }
