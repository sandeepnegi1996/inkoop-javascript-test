console.log("hello world");

const generateSelector = document.querySelector("#gen");
const outputDiv = document.querySelector("#output");
const inputRandom = document.querySelector("#gen-num");
const refershing = document.querySelector("#refreshing");

function randomText() {
  console.log("button clicked");
  const randomNum = Math.round(Math.random() * 1000000);
  console.log(randomNum);
  inputRandom.innerHTML = randomNum;
}

function refershingText() {
  console.log("checking");
  var count = 5;
  var refreshInterval = setInterval(function(params) {
    if (count == 0) {
      clearInterval(refreshInterval);
    }

    refershing.innerHTML = "Refreshing in " + count + " seconds";
    count--;
  }, 1000);
}
function main() {
  generateSelector.addEventListener("click", function() {
    randomText();
    refershingText();
  });
}

main();
