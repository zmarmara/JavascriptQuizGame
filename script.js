"use strict";

//Add as many questions & answers as you like

let questions = {
  Q1: '"4" + 4 outputs...',
  Q2: 'Another question. "4" - 4 outputs...',
  Q3: `0==[], true or false?`,
  Q4: `0==="0", true or false?`,
  Q5: `0=="0", true or false?`,
  Q6: `let myVar = "cat";
       parseInt(myVar); What is the result?`,
  Q7: `console.log(...[1,2,3]) outputs...`,
};

let answers = {
  Q1: "44",
  Q2: "0",
  Q3: "true",
  Q4: "false",
  Q5: "true",
  Q6: "NaN",
  Q7: "1 2 3",
};

let messages = {
  msgStart: `<p class="nes-text is-disabled">So a JavaScript function walks into a bar. And the bartender says, "Success, but you're not ready!"</p>`,
  msgFail: `<i class="nes-icon is-medium heart"></i><p class="nes-text is-primary">I still love you no matter what.</p>`,
  msgWin: `<i class="nes-icon is-medium star"></i><p class="nes-text is-primary">You are the best!</p>`,
  msgEnd: `<p class="nes-text is-primary">This is boring... Although I can never be sure what "this" refers too.</p>`,
};

let count = 0;

function test() {
  //check answer
  let answer = document.getElementById("answer").value;
  //no answer
  if (!answer) {
    document.getElementById("message").innerHTML = messages.msgStart;
  }
  //success
  if (answer == Object.values(answers)[count]) {
    document.getElementById("message").innerHTML = messages.msgWin;
  }
  //fail
  if (answer !== Object.values(answers)[count]) {
    document.getElementById("message").innerHTML = messages.msgFail;
  }
  //clear input
  document.getElementById("answer").value = "";
  //next question
  count++;
  newQuestion();
}

function newQuestion() {
  //Input question
  if (count < Object.values(questions).length) {
    document.getElementById("question").innerHTML =
      Object.values(questions)[count];
  } else {
    document.getElementById("message").innerHTML = messages.msgEnd;
    reset();
  }
}

//Object.values(questions)
function start() {
  //Start game - enable inputs
  document.getElementById("checkAnswer").classList.remove("is-disabled");
  document.getElementById("answer").disabled = false;
  document.getElementById("checkAnswer").addEventListener("click", test);
  //Refresh jokes
  document.getElementById("message").innerHTML = messages.msgStart;
  //input question
  newQuestion();
}

function reset() {
  count = 0;
  document.getElementById("checkAnswer").classList.add("is-disabled");
  document.getElementById("answer").disabled = true;
  document.getElementById("checkAnswer").removeEventListener("click", test);
  document.getElementById(
    "question"
  ).innerHTML = `<p>I really can't do this anymore.</p><button class="nes-btn is-warning" type="button" onclick="start()">Don't play THIS again</button>`;
}
