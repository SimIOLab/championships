$(document).ready(function() {
  function getNextFriday(timezone) {
      var now = moment().tz(timezone);
      var nextFriday = moment().tz(timezone);

      // Calculate the date of the next Friday
      nextFriday.add(0, 'weeks').day(5);

      // Set the time to 8:00 PM
      nextFriday.set({hour: 20, minute: 0, second: 0, millisecond: 0});
      return nextFriday;
  }

  // Set the timezone you want to use
  var timezone = "America/Santiago"; // Replace with your desired timezone

  // Set the date we're counting down to
  var countDownDate = getNextFriday(timezone).valueOf();

  // Update the count down every 1 second
  var x = setInterval(function() {
      // Get today's date and time in the specified timezone
      var now = moment().tz(timezone).valueOf();

      // Find the distance between now and the count down date
      var distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Output the result in an element with id="countdown"
      document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
      + minutes + "m " + seconds + "s ";

      // If the count down is over, reset the countdown to next Friday
      if (distance < 0) {
          countDownDate = getNextFriday(timezone).valueOf();
      }
  }, 1000);
});