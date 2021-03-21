/*
	Rocket Internet by TEMPLATE STOCK
    templatestock.co @templatestock
*/

/* Header Full Screen */
$(document).ready(function() {
	$('#homeFullScreen').css({height:$(window).height(),width:$(window).width()});
	$(window).resize(function(){
        $('#homeFullScreen').css({height:$(window).height(),width:$(window).width()});
    });

});


var jsonRAW;


fetch('https://api.thingspeak.com/channels/1333604/feeds.json?results=2')
.then(res => res.json())
.then(data => {

  

jsonRAW = data;
//logDataset(); 

console.log(jsonRAW); 

// convert to javascript object:
//var obj = JSON.parse(jsonRAW);

// get last item in array:
last = jsonRAW.feeds[1].field1;
// result: some COLLEGE NAME I WANT TO GET
battery = jsonRAW.feeds[1].field2;



document.getElementById("temp").innerHTML = parseFloat(last).toFixed(2) + " °C";
document.getElementById("battery").innerHTML = battery + " %";



console.log(last)
console.log(battery)


})  



function logDataset () { 
console.log(jsonRAW); 
}


