console.log("hello world");

const generateSelector = document.querySelector("#gen");
const outputDiv = document.querySelector("#output");
const inputRandom = document.querySelector("#gen-num");
const refershing = document.querySelector("#refreshing");
const submitTest = document.querySelector("#final-submit");
const inputVal = document.getElementById("inputText");
const replayGame = document.querySelector("#replay-game");

//replay
function replay() {
  inputVal.value = "";
}
function crossCheck() {
  if (inputVal) {
    //console.log(inputVal.value);
    const inputNumber = parseInt(inputVal.value, 10);
    console.log(inputNumber);
    const storedValue = localStorage.getItem("randomFirst");
    //now find how many digits are same in inputNumber and storedValue
    //for this i will convert the number to string and  then compare both of them
    var a = inputNumber.toString();
    var b = storedValue.toString();
    var count = 0;
    for (let i = 0; i < b.length; i++) {
      var charStore = b.charAt(i);
      if (a.includes(charStore)) {
        count++;
      }
    }
    console.log("numbers matched were " + count);
  }
}

function randomText() {
  console.log("button clicked");
  const randomNum = Math.round(Math.random() * 1000000);
  console.log(randomNum);
  inputRandom.innerHTML = randomNum;
  localStorage.setItem("randomFirst", randomNum);
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
    console.log(
      "printing the stored random number " + localStorage.getItem("randomFirst")
    );
  });

  submitTest.addEventListener("click", function() {
    crossCheck();
  });

  replayGame.addEventListener("click", function() {
    //remove the text which is entered
    replay();
  });
}

main();
