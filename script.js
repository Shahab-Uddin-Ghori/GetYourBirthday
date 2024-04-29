document.getElementById("calc-age-btn").addEventListener("click", function () {
  event.preventDefault();
  // Get the birth date value from the input
  let birthdate = document.getElementById("birthdate").value;

  // Convert birthdate to date object
  let birthDate = new Date(birthdate);

  // Get current date
  let currentDate = new Date();

  // Calculate the difference in milliseconds
  let ageInMilliseconds = currentDate - birthDate;

  // Convert milliseconds to seconds
  let ageInSeconds = ageInMilliseconds / 1000;

  // Calculate total seconds
  let totalSeconds = Math.floor(ageInSeconds);

  // Calculate years
  let years = Math.floor(totalSeconds / (60 * 60 * 24 * 30.4375 * 12));

  // Calculate months
  let months = Math.floor((totalSeconds / (60 * 60 * 24 * 30.4375)) % 12);

  // Calculate days
  let days = Math.floor((totalSeconds / (60 * 60 * 24)) % 30.4375); // Average days in a month

  // Calculate hours
  let hours = Math.floor((totalSeconds / (60 * 60)) % 24);

  // Calculate minutes
  let minutes = Math.floor((totalSeconds / 60) % 60);

  // Calculate remaining seconds
  let seconds = totalSeconds % 60;
  if (seconds > totalSeconds) {
    alert("pehly peda to hoja birthday badme dekh lena");
    return;
  }

  setInterval(() => {
    seconds++;
    if (seconds == 60) {
      minutes++;
      seconds = 0;
    }
    if (minutes == 60) {
      hours++;
      minutes = 0;
    }
    if (hours == 24) {
      days++;
      hours = 0;
    }
    if (days == 30.4375) {
      months++;
      days = 0;
    }
    if (months == 12) {
      years++;
      months = 0;
    }

    document.getElementById("years").innerText = years;
    document.getElementById("months").innerText = months;
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
    document.getElementById("message").innerText = "You are";
    document.getElementById("message2").innerText = "old";
  }, 1000);

  //   // Calculate next birthday
  let nextBirthday = new Date(
    currentDate.getFullYear(),
    birthDate.getMonth(),
    birthDate.getDate()
  );
  if (nextBirthday < currentDate) {
    nextBirthday.setFullYear(currentDate.getFullYear() + 1);
  }

  //   // Calculate the time difference between current date and next birthday
  let timeDifference = nextBirthday - currentDate;

  //   // Convert milliseconds to seconds
  let ntotalSeconds = Math.floor(timeDifference / 1000);

  // Calculate years, months, days, hours, minutes, and seconds remaining
  // let nyears = Math.floor(ntotalSeconds / (60 * 60 * 24 * 30.4375 * 12));
  let nmonths = Math.floor((ntotalSeconds / (60 * 60 * 24 * 30.4375)) % 12);
  let ndays = Math.floor((ntotalSeconds / (60 * 60 * 24)) % 30.4375);
  let nhours = Math.floor((ntotalSeconds / (60 * 60)) % 24);
  let nminutes = Math.floor((ntotalSeconds / 60) % 60);
  let nseconds = totalSeconds % 60;

  //   // Update the display every second
  setInterval(() => {
    // Decrease the seconds
    nseconds--;
    if (nseconds < 0) {
      nseconds = 59;
      // Decrease the minutes when seconds reach 0
      nminutes--;
      if (nminutes < 0) {
        nminutes = 59;
        // Decrease the hours when minutes reach 0
        nhours--;
        if (nhours < 0) {
          nhours = 23;
          // Decrease the days when hours reach 0
          ndays--;
          if (ndays < 0) {
            ndays = 29.53125; // Average days in a month
            // Decrease the months when days reach 0
            nmonths--;
            if (nmonths < 0) {
              nmonths = 11;
              // Decrease the years when months reach 0
              // nyears--;
            }
          }
        }
      }
    }

    //     // Update the HTML elements with the remaining time
    // document.getElementById("years").innerText = years;
    document.getElementById("monthsLeft").innerText = nmonths;
    document.getElementById("daysLeft").innerText = ndays;
    document.getElementById("hoursLeft").innerText = nhours;
    document.getElementById("minutesLeft").innerText = nminutes;
    document.getElementById("secondsLeft").innerText = nseconds;
    document.getElementById("message2").innerText = ""; // Clear any previous message
  }, 1000);
});
