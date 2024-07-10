<div id="countdown"></div>

<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="https://cdn.rawgit.com/hilios/jQuery.countdown/2.2.0/dist/jquery.countdown.min.js"></script>


<script>
$(document).ready(function() {
    function getNextSaturday() {
        var now = new Date();
        var nextSaturday = new Date();
        nextSaturday.setDate(now.getDate() + ((6 - now.getDay() + 7) % 7));
        nextSaturday.setHours(22, 0, 0, 0); // Set time to 10:00 PM
        return nextSaturday;
    }

    // Set the date we're counting down to
    var countDownDate = getNextSaturday().getTime();

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
            countDownDate = getNextSaturday().getTime();
        }
    }, 1000);
});
</script>


<script>
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
</script>


<script>
$(document).ready(function() {
    function getNextFriday() {
        var now = new Date();
        var nextFriday = new Date();
        nextFriday.setDate(now.getDate() + ((6 - now.getDay() + 7) % 7));
        nextFriday.setHours(20, 0, 0, 0); // Set time to 10:00 PM
        return nextFriday;
    }
    
    // Example usage
    const countDownDate = getNextFriday(dateString).getTime();

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
            countDownDate = getNextFriday().getTime();
        }
    }, 1000);
});
</script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment-timezone/0.5.34/moment-timezone-with-data.min.js"></script>
<script>
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
</script>
