 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyADNlXIwk-A7-qmtnfX7K9KHz03Vn8iF_s",
    authDomain: "colorado-ski-and-board-report.firebaseapp.com",
    databaseURL: "https://colorado-ski-and-board-report.firebaseio.com",
    projectId: "colorado-ski-and-board-report",
    storageBucket: "colorado-ski-and-board-report.appspot.com",
    messagingSenderId: "1088671396203",
    appId: "1:1088671396203:web:bf28f09b4d94a0a75e5c2e"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.database();

//Autocomplete for chart.js
var autocomplete = new google.maps.places.Autocomplete(document.getElementById('userAddress'));

//Array to contain resort objects
var resorts = [  
    vail = {name: "Vail", widget: 482, zip: 81657, address: "Vail Ski Resort, Vail, CO 81657"},
    wolfCreek = {name: "Wolf Creek", widget: 511, zip: 81147, address: "3821 US-160, Pagosa Springs, CO 81147"},
    winterPark = {name: "Winter Park", widget: 507, zip: 80482, address: "85 Parsenn Road, Winter Park, CO 80482"},
    telluride = {name:"Telluride", widget: 456, zip: 81435, address: "565 Mountain Village Blvd, Telluride, CO 81435"},
    steamboat = {name:"Steamboat", widget: 425, zip: 80487, address: "2305 Mt Werner Cir, Steamboat Springs, CO 80487"},
    sunlight = {name:"Sunlight Mtn", widget: 445, zip: 81601, address: "10901 County Road 117, Glenwood Springs, CO 81601"},
    silverton = {name: "Silverton", widget: 1435, zip: 81433, address: "6226 CR-110, Silverton, CO 81433"},    
    monarch = {name:"Monarch Mountain", widget: 240, zip: 81201, address: "123 N F St, Salida, CO 81201"},
    purgatory = {name: "Purgatory", widget: 330, zip: 81301, address: "1 Skier Pl, Durango, CO 81301"},
    powderHorn = {name: "Powder Horn", widge: 329, zip: 81643, address: "48338 Powderhorn Rd, Mesa, CO 81643"},
    loveland = {name:"Loveland", widget: 220, zip: 80435, address: " I-70 Exit 216, Georgetown, CO 80435"},
    keystone = {name: "Keystone Resort", widget: 197, zip: 80435, address: "100+Dercum+Square+Keystone+CO+80435"},
    howelson = {name:"Howelson", widget: 181, zip: 80487, address: "845 Howelsen Pkwy, Steamboat Springs, CO 80487"},
    eldora = {name: "Eldora", widget: 143, zip: 80466, address: "2861 Eldora Ski Road, Nederland, CO 80466"},
    echo ={name: "Echo Mountain", widget: 1673, zip: 80452, adress: "19285 CO-103, Idaho Springs, CO 80452"},
    crestedButte = {name: "Crested Butte", widget: 120, zip: 81225, address: "12 Snowmass Rd, Crested Butte, CO 81225" },
    copper = {name: "Copper Mountain", widget: 113, zip: 80443, address: "209+Ten+Mile+Cir+Frisco+CO+80443"},
    cooper = {name:"Ski Cooper", widget: 372, zip: 80461, address: "1101 Poplar St, Leadville, CO 80461"},
    breck = {name: "Breckinridge", widget: 77, zip: 80424, address: "1599+Ski+Hill+Rd+Breckenridge+CO+80424"},
    beaverCreek = {name: "Beaver Creek", widget: 36, zip:81620 , address: "40 Village Rd, Avon, CO 81620"},
    aspen = {name:"Aspen", widget: 25, zip: 81612, address: "602 E Dean St, Aspen, CO 81612"},
    arapahoe = {name: "Arapahoe Basin", widget: 20, zip: 80435, address: "28194 US-6, Dillon, CO 80435"},
];
//Initializing value variables
var resortAddress = "";
var zip = 0;
var widget = 0;
var userAddress = "";
var color = Chart.helpers.color;

//Initializing forecast variables
var dayOne = 0;
var dayTwo = 0;
var dayThree = 0;
var dayFour = 0;
var dayFive = 0;
var daySix = 0;

//Creates dropdown buttons for forecast and hamburger menus
resorts.forEach(function(element){     
    count = 0;
    count++;
    if (count <= 23) {
        var newBtn = "<button type='button' class='btn btn-dark resortbtn mx-1' value='"+ element.zip + "' id='"+ element.widget +"' name='"+ element.address +"'>"+ element.name +"</button>"
        $("#btnDiv1").prepend(newBtn);
    };    
    var dropDwnBtn = "<button class='dropDownResorts btn-sm' id='"+ element.zip +"'>"+ element.name +"</button>";
    $(".dropdown-menu").append(dropDwnBtn);
});

//Dropdown on click for forecasts
$(".dropDownResorts").on("click",function(){
    var pickedZip = this.id;
    weatherAPI(pickedZip);
});

//Function for email validation
const validate = (email) => {
    const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    
    if (expression.test(String(email).toLowerCase()) === false) {
        $("#newsLett").attr("placeholder", "Please use a valid email");
    } else {
        $("#newsLett").attr("placeholder", "Enter Email");
        var emailUser = {
            validEmail : email
        }
        database.ref().push(emailUser);
    }
}
//Submit for newsletter email form
$("#newsBtn").on("click", function() {
    event.preventDefault();
    var emailRaw = $("#newsLett").val().trim();
    $("#newsLett").val("");
    validate(emailRaw);
    
});

//Function updates forecast to selected resort
function chartUpdate(num1,num2,num3,num4,num5,num6) {
    var chart = {
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
                label: 'Temperature(F)',
                backgroundColor: color("224, 12, 12").alpha(0.5).rgbString(),
                borderColor: "255, 0, 0",
                fill: false,
                data: [
                    num1,
                    num2,
                    num3,
                    num4,
                    num5,
                    num6
                ],
            }],
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
    var ctx = document.getElementById('myChart').getContext('2d');
    window.myLine = new Chart(ctx, chart);
}
//Function gets variables from weather API
function weatherAPI(num) {
    //URL for weather query
    var openWeatherQueryURL = "https://api.openweathermap.org/data/2.5/forecast?zip=" + num + ",us&units=imperial&APPID=8945840c8250c919b4821b938074f3a6";

    // Ajax call using the open weather api
    $.ajax({
        url: openWeatherQueryURL,
        method: "GET"
    })
        .then(function (response) {
            //Weather variables
            console.log(response.list);
            var weatherArray = (response.list);
            var temp = weatherArray[5].main.temp;
            var windSpd = weatherArray[5].wind.speed;
            var weather = weatherArray[5].weather[0].description;

            dayOne = weatherArray[2].main.temp
            dayTwo = weatherArray[2].main.temp;
            dayThree = weatherArray[10].main.temp;
            dayFour = weatherArray[18].main.temp;
            dayFive = weatherArray[26].main.temp;
            daySix = weatherArray[34].main.temp;
            chartUpdate(dayOne, dayTwo, dayThree, dayFour, dayFive, daySix);
            //Changes HTML to reflect weather readings
            $(".weatherDisplay").html("<div>Temperature:<span> " + temp + " degrees</span></div><div>Wind Speed:<span > " + windSpd + " mph</span></div><div>Weather Conditions:<span > " + weather + "</span></div>");
        });
}

// Create Home button
var homeBtn = "<button type='button' class='btn btn-success' id = 'home-btn' name= 'Home'>Home</button>"
$("#btnDiv2").prepend(homeBtn);

// what happens when the home button is clicked
$('#home-btn').on("click", function () {
    homePage();
    $(".toggler").prop("checked", false);
    // Emptying the divs so that dups are displayed if the same resort is chosen again
    $(".mapDisplay").empty();
 
});

//Function writes map to html
function mapMake() {
    $('.mapDisplay').show();
    if (userAddress.length < 4) {
        $(".maploc").text("Please enter a valid address");
        $(".mapDisplay").hide();
    } else {
        $(".maploc").empty();
        var mapURL = "https://www.google.com/maps/embed/v1/directions?key=AIzaSyBJKhf4GEm0R7YyUP7XmfM2KgVF6cTdz6M&origin=" + userAddress + "&destination=" + resortAddress + "";
        $(".mapDisplay").attr("src", mapURL);
    }
}

// What happens when the address button is clicked
$('#address-btn').on("click", function () {
    event.preventDefault();
    var userAddressRaw = $('#userAddress').val().trim();
    // Takes user input from the form and stores into variable
    // Replaces spaces in the user input so that it will work with the api
    userAddress = userAddressRaw.split(' ').join('+');
    mapMake();
});

//Determines which info user sees
function homePage() {
    $('.jumbotron').show();
    $("#widgetDisplay").hide();
    $('#carouselResorts').show();
    $('#homepage-card').show();
    $('.mapDisplay').hide();
    $('.form-group').hide();
    $('#address-btn').hide();
    $("#weatherBox").hide();
    $('#mapBox').hide();
    $("#weatherGraph").show();
    $("#news-col").show();
} 

function infoPage() {
    $('.jumbotron').show();
    $("#carouselResorts").hide();
    $("#widgetDisplay").show();
    $("#homepage-card").hide();
    $(".form-group").show();
    $("#address-btn").show();
    $("#mapBox").show();
    $('#weatherBox').show();
    $("#weatherGraph").hide();
    $("#news-col").hide();
}

//Updates html to reflect widget info
function widgetCreate(a) {
    $("#o28858").attr("src", "https://www.onthesnow.com/widget/list?resorts=" + a + "&color=b");
}





//On click for chosen resort
$(".resortbtn").on("click", function () {
    infoPage();
    $('.mapDisplay').empty();
    $(".toggler").prop("checked", false);
    resortAddress = this.name;
    zip = this.value;
    widget = this.id;

    widgetCreate(widget);
    mapMake();
    weatherAPI(zip);

});

//Chart and Moment code
var timeFormat = 'MM/DD/YYYY HH:mm';

function newDate(days) {
    return moment().add(days, 'd').toDate();
}

function newDateString(days) {
    return moment().add(days, 'd').format(timeFormat);
}

//Calling intial page state
homePage();