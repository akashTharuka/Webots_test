// Set the date we're counting down to
var countDownDate = new Date("Feb 4, 2022 17:19:00").getTime();

var daySpan = document.querySelector('.days');
var hourSpan = document.querySelector('.hours');
var minSpan = document.querySelector('.minutes');
var secSpan = document.querySelector('.seconds');

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the elements
  daySpan.innerHTML = days;
  hourSpan.innerHTML = hours;
  minSpan.innerHTML = minutes;
  secSpan.innerHTML = seconds;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.querySelector('.clock.topic').innerText = "EXPIRED";
    document.querySelector('.clock-display').classList.add('d-none');
  }
}, 1000);