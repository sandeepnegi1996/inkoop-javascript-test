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

  for (let index = 0; index <= 5; index++) {
    setInterval(function() {
      refershing.innerHTML = "Refreshing in " + index + " Seconds";
    }, 1000);
  }
}
function main() {
  generateSelector.addEventListener("click", function() {
    randomText();
    refershingText();
  });
}

main();
