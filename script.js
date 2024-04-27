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
    document.getElementById("message").innerText = "You are"
    document.getElementById("message2").innerText = "old"

  }, 1000);
});
