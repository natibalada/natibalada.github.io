var countDownDate = new Date("May 01, 2022 00:00:00").getTime();
          
// Update the count down every 1 second
var countdownfunction = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
  
  if (distance < 0) {
    clearInterval(countdownfunction);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);


// When page loads
$(document).ready(function () {
  const origTitle = document.title;
  $('.bottomleft').on("click", function() {
    document.getElementById("overlay").style.height = "100%";
    document.title = "Felicidades!";
  });
  $('#overlay').on("click", function() {
    document.getElementById("overlay").style.height = "0%";
    document.title = origTitle;
  });
});
