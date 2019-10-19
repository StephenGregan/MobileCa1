// Initialize app
var myApp = new Framework7();


// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    dynamicNavbar: true
});

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");
});


// Now we need to run the code that will be executed only for About page.

// Option 1. Using page callback for page (for "about" page in this case) (recommended way):
myApp.onPageInit('about', function (page) {
    // Do something here for "about" page

})

// Option 2. Using one 'pageInit' event handler for all pages:
$$(document).on('pageInit', function (e) {
    // Get page data from event data
    var page = e.detail.page;

    if (page.name === 'about') {
        // Following code will be executed for page with data-page attribute equal to "about"
        myApp.alert('Here comes About page');
    }
})

// Option 2. Using live 'pageInit' event handlers for each page
$$(document).on('pageInit', '.page[data-page="about"]', function (e) {
    // Following code will be executed for page with data-page attribute equal to "about"
    myApp.alert('Here comes About page');
})



function openCurrencyApi()
{
    var http = new XMLHttpRequest();
    /* const url = 'https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lng}&key=17147a2b7c2043c3a15cd6459836fc87'; */
    const url = "http://apilayer.net/api/live?access_key=6a6e671723d1a551010c5a6d537c5c59&currencies=EUR,GBP,CAD,PLN&source=USD&format=1";
    http.open('GET', url);
    http.send();

    http.onreadystatechange = (e) => 
    {
        var response = http.responseText;
        var responseJSON = JSON.parse(response);
       // document.getElementById('request').innerHTML = responseJSON;
        console.log(responseJSON);
        console.log(response);
        var conversionRate = responseJSON.quotes.USDEUR;
        console.log(conversionRate);
        document.getElementById('pos').innerHTML = conversionRate;
        var euro = userinput * conversionRate;
        console.log(conversionRate);
        document.getElementById('conv').innerHTML = euro;
        convertCurrency(conversionRate);      
    }
}

function convertCurrency(conversionRate) {
    //openCurrencyApi();
    var userinput = Number(document.getElementById('userinput').value);
    console.log(userinput);
    var converted = Number(userinput) * Number(conversionRate);
    Number(document.getElementById('conv').innerHTML = converted);
    console.log(converted);
    console.log(conversionRate);
}
    

    

