$(document).ready(function () {
     var winHeight = $(window).height();
     $('#mainDiv').css('height', (winHeight * 1.5) + 'px');
     myFunction();
	 
	 $("#linkAbt").click(function(){
		 $(".overlayDiv").hide();
		 $("#overlayDivAbout").toggle();
	 });
	 $("#linkVenue").click(function(){
		 $(".overlayDiv").hide();
		 $("#overlayDivVenue").toggle();
	 });
	 $("#linkEI").click(function(){
		 $(".overlayDiv").hide();
		 $("#overlayDivEi").toggle();
	 });
	 $("#linkImgs").click(function(){
		 $(".overlayDiv").hide();
		 $("#overlayDivImgs").toggle();
	 });
	 
	 includeHTML();
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

function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /*loop through a collection of all HTML elements:*/
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /*make an HTTP request using the attribute value as the file name:*/
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /*remove the attribute, and call this function once more:*/
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }      
      xhttp.open("GET", file, true);
      xhttp.send();
      /*exit the function:*/
      return;
    }
  }
};