// select the drop-down list and the body of the index.html page
var moods = document.querySelector("#moods");
var body = document.querySelector("body");

// add an event listener for a change event that activates when the moods drop-down list is changed
moods.addEventListener("change", function (e) {
  // target the value of the drop-down list
  var mood = e.target.value;
  if (mood === "happy") {
    body.classList.remove("sad");
    body.classList.remove("passionate");
    body.classList.add("happy");
  } else if (mood === "sad") {
    body.classList.remove("happy");
    body.classList.remove("passionate");
    body.classList.add("sad");
  } else if (mood === "passionate") {
    body.classList.remove("sad");
    body.classList.remove("happy");
    body.classList.add("passionate");
  }
});
