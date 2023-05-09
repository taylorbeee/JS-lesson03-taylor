var time = new Date().getHours();

// console.log(`It is ${time} o'clock.`);
var greeting = "Hi";
var name = "Taylor";

if (time < 12) {
  greeting = "Good morning.";
} else if (time <= 18) {
  greeting = "Good afternoon!";
} else if (time <= 22) {
  greeting = "Good Evening.";
} else {
  alert(`Go to bed.`);
}

alert(`${greeting}, ${name}!`);

// alert()
