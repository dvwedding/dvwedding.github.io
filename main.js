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
	 
	 $num = $('.my-card').length;
$even = $num / 2;
$odd = ($num + 1) / 2;

if ($num % 2 == 0) {
  $('.my-card:nth-child(' + $even + ')').addClass('active');
  $('.my-card:nth-child(' + $even + ')').prev().addClass('prev');
  $('.my-card:nth-child(' + $even + ')').next().addClass('next');
} else {
  $('.my-card:nth-child(' + $odd + ')').addClass('active');
  $('.my-card:nth-child(' + $odd + ')').prev().addClass('prev');
  $('.my-card:nth-child(' + $odd + ')').next().addClass('next');
}

$('.my-card').click(function() {
  $slide = $('.active').width();
  console.log($('.active').position().left);
  
  if ($(this).hasClass('next')) {
    $('.card-carousel').stop(false, true).animate({left: '-=' + $slide});
  } else if ($(this).hasClass('prev')) {
    $('.card-carousel').stop(false, true).animate({left: '+=' + $slide});
  }
  
  $(this).removeClass('prev next');
  $(this).siblings().removeClass('prev active next');
  
  $(this).addClass('active');
  $(this).prev().addClass('prev');
  $(this).next().addClass('next');
});


// Keyboard nav
$('html body').keydown(function(e) {
  if (e.keyCode == 37) { // left
    $('.active').prev().trigger('click');
  }
  else if (e.keyCode == 39) { // right
    $('.active').next().trigger('click');
  }
});


  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-36251023-1']);
  _gaq.push(['_setDomainName', 'jqueryscript.net']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();
	
	 
});
function flipCard() {
    setTimeout(flip1, 7000);
	
}
function flip1(){ 
$(".flip-card .flip-card-inner").css({
	"transform" : "rotateX(180deg)"
}).promise().done(function() {
	setTimeout(flip2, 18000);

});
}

function flip2(){ 
$(".flip-card .flip-card-inner").css({
	"transform" : "rotateX(0deg)"
}).promise().done(function() {
	setTimeout(flip1, 7000);

});;
}

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

var countDownDate = new Date("May 26, 1989 10:03:00").getTime();
var x = setInterval(function() {
    var now = new Date().getTime();
    
    var distance =now - countDownDate;
    
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    document.getElementById("cntDwn").innerHTML ="Since" + days + "Days " + hours + "Hours "
    + minutes + "Minutes " + seconds + "Seconds ";
    
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("cntDwn").innerHTML = "Happily Married !!!";
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
