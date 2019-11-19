var resortId = ["20", "25", "36", "77", "113", "120", "1673", "143", "181", "197", "220", "240", "329",
    "330", "1435", "372", "425", "445", "456", "482", "507", "511"]

var temp;
var windSpd;
var weather;
var userAddress = "";
var resortAddress= "";

/* Arapahoe Basin 20, Aspen Snowmass 25, Aspen Highlands 25, Aspen Mountain 25, Beaver Creek 36, Breckenridge 77, Buttermilk 25, 
Copper 113, Crested Butte 120, echo mountain 1673, Eldora 143, GRANBY NO RESULT, Howelson 181, Keystone 197, Loveland 220, 
Monarch Mtn 240, PowderHorn 329, Purgatory 330, Silverton 1435, Ski Cooper 372, Steamboat 425, Sunlight Mtn 445, Telluride 456, 
Vail 482, Winter Park 507, Wolf Creek 511,
*/

homePage();


// What happens when the copper button is clicked
$('#copper-btn').on("click", function () {

    // Function that shows and hides certain page elements
    infoPage();

    resortAddress = "209+Ten+Mile+Cir+Frisco+CO+80443";

    $(".widgetDisplay").append("<div class='ots-widget'><iframe id='o28858' width='600' height='150' border='0' frameborder='0' scrolling='no' src='https://www.onthesnow.com/widget/list?resorts=" + resortId[4] + "&color=b'></iframe><p><a href='https://www.onthesnow.com' target='_blank'>Powered by OnTheSnow.com</a></p></div>");
    
    // $(".mapDisplay").append("<iframe width='450' height='250' frameborder='0' style='border:0'src='https://www.google.com/maps/embed/v1/directions?key=AIzaSyBJKhf4GEm0R7YyUP7XmfM2KgVF6cTdz6M&origin=" + userAddress + "&destination=209+Ten+Mile+Cir+Frisco+CO+80443'allowfullscreen></iframe>")

    resortZip = "80435";
    var openWeatherQueryURL = "https://api.openweathermap.org/data/2.5/forecast?zip=" + resortZip + ",us&units=imperial&APPID=8945840c8250c919b4821b938074f3a6";

    // Ajax call using the open weather api
    $.ajax({
        url: openWeatherQueryURL,
        method: "GET"
    })
        .then(function (response) {

            var weatherArray = (response.list);
            console.log(weatherArray[5]);
            console.log(weatherArray[5].main.temp);
            console.log(weatherArray[5].wind.speed);
            console.log(weatherArray[5].weather[0].description);
            temp = weatherArray[5].main.temp;
            windSpd = weatherArray[5].wind.speed;
            weather = weatherArray[5].weather[0].description;
        })


});

// What happens when the keystone button is clicked
$('#keystone-btn').on("click", function () {

    infoPage();

    resortAddress = "100+Dercum+Square+Keystone+CO+80435"

    $(".widgetDisplay").append("<div class='ots-widget'><iframe id='o28858' width='600' height='150' border='0' frameborder='0' scrolling='no' src='https://www.onthesnow.com/widget/list?resorts=" + resortId[9] + "&color=b'></iframe><p><a href='https://www.onthesnow.com' target='_blank'>Powered by OnTheSnow.com</a></p></div>");
    
    // $(".mapDisplay").append("<iframe width='450' height='250' frameborder='0' style='border:0'src='https://www.google.com/maps/embed/v1/directions?key=AIzaSyBJKhf4GEm0R7YyUP7XmfM2KgVF6cTdz6M&origin=2199+S+University+Blvd+Denver+CO+80208&destination=100+Dercum+Square+Keystone+CO+80435'allowfullscreen></iframe>")

    
    resortZip = "80435";
    var openWeatherQueryURL = "https://api.openweathermap.org/data/2.5/forecast?zip=" + resortZip + ",us&units=imperial&APPID=8945840c8250c919b4821b938074f3a6";

    // Ajax call using the open weather api
    $.ajax({
        url: openWeatherQueryURL,
        method: "GET"
    })
        .then(function (response) {

            var weatherArray = (response.list);
            console.log(weatherArray[5]);
            console.log(weatherArray[5].main.temp);
            console.log(weatherArray[5].wind.speed);
            console.log(weatherArray[5].weather[0].description);
            temp = weatherArray[5].main.temp;
            windSpd = weatherArray[5].wind.speed;
            weather = weatherArray[5].weather[0].description;
        })


});

// What happens when the breck button is clicked
$('#breckenridge-btn').on("click", function () {

    infoPage();

    resortAddress = "1599+Ski+Hill+Rd+Breckenridge+CO+80424";

    $(".widgetDisplay").append("<div class='ots-widget'><iframe id='o28858' width='600' height='150' border='0' frameborder='0' scrolling='no' src='https://www.onthesnow.com/widget/list?resorts=" + resortId[3] + "&color=b'></iframe><p><a href='https://www.onthesnow.com' target='_blank'>Powered by OnTheSnow.com</a></p></div>");
    
    // $(".mapDisplay").append("<iframe width='450' height='250' frameborder='0' style='border:0'src='https://www.google.com/maps/embed/v1/directions?key=AIzaSyBJKhf4GEm0R7YyUP7XmfM2KgVF6cTdz6M&origin=2199+S+University+Blvd+Denver+CO+80208&destination=1599+Ski+Hill+Rd+Breckenridge+CO+80424'allowfullscreen></iframe>")


    var openWeatherQueryURL = "https://api.openweathermap.org/data/2.5/forecast?zip=" + "80424" + ",us&units=imperial&APPID=8945840c8250c919b4821b938074f3a6";

    // Ajax call using the open weather api
    $.ajax({
        url: openWeatherQueryURL,
        method: "GET"
    })
        .then(function (response) {

            var weatherArray = (response.list);
            console.log(weatherArray[5]);
            console.log(weatherArray[5].main.temp);
            console.log(weatherArray[5].wind.speed);
            console.log(weatherArray[5].weather[0].description);
            temp = weatherArray[5].main.temp;
            windSpd = weatherArray[5].wind.speed;
            weather = weatherArray[5].weather[0].description;
        })


});


// what happens when the home button is clicked
$('#home-btn').on("click", function() {
   homePage();
   
   // Emptying the divs so that dups are displayed if the same resort is chosen again
   $('.widgetDisplay').empty();
   $('mapDisplay').empty();

});

// What happens when the address button is clicked
$('#address-btn').on("click", function() {
    event.preventDefault();
    
    // Takes user input from the form and stores into variable
    var userAddressRaw = $('#userAddress').val().trim();
    
    // Replaces spaces in the user input so that it will work with the api
    var userAddress = userAddressRaw.split(' ').join('+');
    // We'll want to store this locally i think
    $(".mapDisplay").append("<iframe width='450' height='250' frameborder='0' style='border:0'src='https://www.google.com/maps/embed/v1/directions?key=AIzaSyBJKhf4GEm0R7YyUP7XmfM2KgVF6cTdz6M&origin=" + userAddress + "&destination=" + resortAddress + "'allowfullscreen></iframe>")
    $('.mapDisplay').show();

    console.log(userAddress);
    console.log(resortAddress);
})


function homePage() {
    $('.widgetDisplay').hide();
    $('.jumbotron').show();
    $('#homepage-card').show();
    $('.mapDisplay').hide();
    $('.form-group').hide();
    $('#address-btn').hide();
} 

function infoPage() {
    $('.jumbotron').hide();
    $('.widgetDisplay').show();
    $('#homepage-card').hide();
    $('.form-group').show();
    $('#address-btn').show();
}


function widgetCreate() {
    $(".widgetDisplay").append("<div class='ots-widget'><iframe id='o28858' width='600' height='150' border='0' frameborder='0' scrolling='no' src='https://www.onthesnow.com/widget/list?resorts=" + resortId + "&color=b'></iframe><p><a href='https://www.onthesnow.com' target='_blank'>Powered by OnTheSnow.com</a></p></div>");

}