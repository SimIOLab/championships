$(document).ready(function() {
  function getNextDate(dateString) {
      // Parse the input string
      const [datePart, timePart, timeZonePart] = dateString.split(' ');
      const [day, month, year] = datePart.split('/').map(Number);
      const [hours, minutes, seconds] = timePart.split(':').map(Number);
      const timeZoneOffset = parseInt(timeZonePart.split('GMT')[1]); // Extract the timezone offset
  
      // Create a new Date object with the parsed values
      const nextDate = new Date(Date.UTC(year, month - 1, day, hours - timeZoneOffset, minutes, seconds));
  
      return nextDate.getTime(); // Return the timestamp
  }
  
  // Example usage
  const dateString = "27/07/2024 19:30:00 GMT-4";
  const countDownDate = getNextDate(dateString);

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

      // Output the result in an element with id="countdown"
      document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
      + minutes + "m " + seconds + "s ";

      // If the count down is over, reset the countdown to next Saturday
      if (distance < 0) {
          countDownDate = getNextDate(dateString);
      }
  }, 1000);
});