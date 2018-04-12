function pad (str, max) {
  str = str.toString();
  return str.length < max ? pad("0" + str, max) : str;
}

$.urlParam = function(name){
    // TODO error catch
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if(!results) return 0;
    return results[1] || 0;
}

function applyFontSize() {
    if($.urlParam('font-size')) {
        console.log($.urlParam('font-size'));
        $('#countdown').css('font-size', $.urlParam('font-size'));
    }
}

var midnight = new Date();
// Set clock to today's 24:00:00.000
midnight.setHours(24,0,0,0)
var countDownDate = midnight.getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  // var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="countdown"
  document.getElementById("countdown").innerHTML =
    pad(hours, 2) + ":" + pad(minutes, 2) + ":" + pad(seconds, 2);

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "00:00:00";
  }
}, 1000);

$( document ).ready(function() {
    applyFontSize();
});
