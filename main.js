$(document).ready(function () {
     var winHeight = $(window).height();
     $('#mainDiv').css('height', (winHeight * 1.5) + 'px');
     myFunction();
});


function myFunction() {
    setInterval(
function(){ 
$(".flip-card").css('border', "10px");
}, 5000);
}

function openNav() {
  document.getElementById("myNav").style.width = "100%";
}
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

//For CountDown

var countDownDate = new Date("Dec 02, 2018 09:00:00").getTime();
var x = setInterval(function() {
    var now = new Date().getTime();
    
    var distance = countDownDate - now;
    
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    document.getElementById("cntDwn").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
    
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "Engaged !!!";
    }
}, 1000);