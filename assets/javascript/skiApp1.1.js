var resorts = [
    copper = {name: "Copper Mountain", widget: 113, zip: 80443, address: "209+Ten+Mile+Cir+Frisco+CO+80443"},
    keystone = {name: "Keystone Resort", widget: 197, zip: 80435, address: "100+Dercum+Square+Keystone+CO+80435"},
    breck = {name: "Breckinridge", widget: 77, zip: 80424, address: "1599+Ski+Hill+Rd+Breckenridge+CO+80424"},
    vail = {name: "Vail", widget: 482, zip: 81657, address: "Vail Ski Resort, Vail, CO 81657"}
];
var resortAddress = "";
var zip = 0;
var widget = 0;


resorts.forEach(function(element){ 
    console.log(element.name)
    var newBtn = "<th><button type='button' class='btn btn-dark resortbtn' value='"+ element.zip + "' id='"+ element.widget +"' name='"+ element.address +"'>"+ element.name +"</button></th>"
    $("#btnDiv").prepend(newBtn);    
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
    $(".mapDisplay").html("<iframe width='910' height='600' frameborder='0' style='border:0'src='https://www.google.com/maps/embed/v1/directions?key=AIzaSyBJKhf4GEm0R7YyUP7XmfM2KgVF6cTdz6M&origin=" + userAddress + "&destination=" + resortAddress + "'allowfullscreen></iframe>")
    $('.mapDisplay').show();

})


function homePage() {
    $('.widgetDisplay').hide();
    $('.jumbotron').show();
    $('#homepage-card').show();
    $('.mapDisplay').hide();
    $('.form-group').hide();
    $('#address-btn').hide();
    $('#weatherBox').hide();
} 

function infoPage() {
    $('.jumbotron').hide();
    $('.widgetDisplay').show();
    $('#homepage-card').hide();
    $('.form-group').show();
    $('#address-btn').show();
    $('#weatherBox').show();
}

//Updates html to reflect widget info
function widgetCreate(a) {
    $(".widgetDisplay").html("<div class='ots-widget'><iframe id='o28858' width='960' height='150' border='0' frameborder='0' scrolling='no' src='https://www.onthesnow.com/widget/list?resorts=" + a + "&color=b'></iframe><p><a id='urlHide' href='https://www.onthesnow.com' target='_blank'>Powered by OnTheSnow.com</a></p></div>");
}

homePage();

//On click for chosen resort
$(".resortbtn").on("click", function () {
    infoPage();
    
    $('.mapDisplay').empty();
    $(".toggler").prop("checked", false);
    resortAddress = this.name;
    zip = this.value;
    widget = this.id;  
    
    widgetCreate(widget);

    //URL for weather query
    var openWeatherQueryURL = "https://api.openweathermap.org/data/2.5/forecast?zip="+ zip +",us&units=imperial&APPID=8945840c8250c919b4821b938074f3a6";
    
    // Ajax call using the open weather api
    $.ajax({
        url: openWeatherQueryURL,
        method: "GET"
    })
        .then(function (response) {
            //Weather variables
            var weatherArray = (response.list);
            var temp = weatherArray[5].main.temp;
            var windSpd = weatherArray[5].wind.speed;
            var weather = weatherArray[5].weather[0].description;         
            
            //Changes HTML to reflect weather readings
            $(".weatherDisplay").html("<div>Temperature:<span> " + temp + " degrees</span></div><div>Wind Speed:<span > "+ windSpd + " mph</span></div><div>Weather Conditions:<span > " + weather +"</span></div>");
        });

});


