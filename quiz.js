let progressques = document.getElementsByClassName("progressques")[0];
let bar = document.getElementById("progressbar");
let progressper2 = document.getElementsByClassName("progressper2")[0];
let start = document.getElementsByClassName("start")[0];
let answered = document.getElementById("answered");
let points = document.getElementById("correct");
let time = document.getElementById("sec");
let ques = document.getElementById("Questions");
const questions = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyper Tool Multi Language",
      "Home Text Markup Language",
    ],
    correct: "Hyper Text Markup Language",
  },

  {
    question: "Which CSS property changes text color?",
    options: ["font-style", "color", "text-color", "background"],
    correct: "color",
  },

  {
    question: "Which symbol is used for comments in JavaScript?",
    options: ["//", "#", "<!-- -->", "**"],
    correct: "//",
  },

  {
    question: "Which method prints something in browser console?",
    options: ["console.print()", "print()", "console.log()", "display()"],
    correct: "console.log()",
  },

  {
    question: "Which company developed JavaScript?",
    options: ["Google", "Microsoft", "Netscape", "Apple"],
    correct: "Netscape",
  },

  {
    question: "Which keyword creates a variable in JavaScript?",
    options: ["var", "define", "make", "create"],
    correct: "var",
  },

  {
    question: "What does CSS stand for?",
    options: [
      "Creative Style Sheets",
      "Computer Style Sheets",
      "Cascading Style Sheets",
      "Colorful Style Sheets",
    ],
    correct: "Cascading Style Sheets",
  },

  {
    question: "Which operator checks equality and type in JavaScript?",
    options: ["=", "==", "===", "!="],
    correct: "===",
  },

  {
    question: "Which HTML tag inserts an image?",
    options: ["<pic>" , " <image> ", "<img>", "<src>"],
    correct: "<img>",
  },

  {
    question: "Which method converts JSON string into object?",
    options: [
      "JSON.stringify()",
      "JSON.parse()",
      "JSON.object()",
      "JSON.convert()",
    ],
    correct: "JSON.parse()",
  },
];

start.addEventListener("click", () => {
  var div = document.createElement("div");
  div.id = "startquiz";
  div.innerHTML = `are you sure to start the quiz?`;

  let yes = document.createElement("button");
  yes.className = "button";
  yes.innerHTML = "Yes";
  div.innerHTML = "OR  Refresh the screen(for NO)";
  yes.addEventListener("click", () => {
    div.innerHTML = "Quiz start's in";
    ques.removeChild(yes);
    timeone();
    setTimeout(() => {
      ques.removeChild(div);
      ques.removeChild(timeleft);
      showques()
    }, 3500);

  });
  ques.appendChild(yes);
  ques.appendChild(div);
  ques.removeChild(start);
});
function timeone() {
  let timeleft = document.createElement("div");
  timeleft.id = "timeleft";
  timeleft.style.color = "blue";
  ques.appendChild(timeleft);
  for (let i = 3; i > 0; i--) {
    setTimeout(
      () => {
        timeleft.innerHTML = i;
          timer()
      },
      (4 - i) * 1000,
    
    );
  }
}
let current = 0;
let score = 0;
let answer=0
function showques(){
  ques.innerHTML=""
   if(current >= questions.length){
   ques.innerHTML="Finished successfully" + score + "/" + answer}
 let qbar=document.createElement("div")
 let ol=document.createElement("ol")
  qbar.id="qbar"
 qbar.innerHTML +="Q" + (current+1) +" : " + questions[current].question
  questions[current].options.forEach((options)=>{
    let li=document.createElement("li")
    let button=document.createElement("Button")
    button.textContent=options
    button.addEventListener("click",()=>{
    if (button.textContent===questions[current].correct){
    current++
  
    score++
     answer++  
      points.innerHTML=score
      answered.innerHTML=answer
      progressques.innerHTML =
"Question " + answer + " of 10"

progressper2.innerHTML =
(score/questions.length)*100 + "%"

bar.style.background =
`linear-gradient(
to right,
green ${score * 10}%,
#ddd ${score * 10}%
)`

      showques()
    }

    
else{
  answer++
  current++
  answered.innerHTML=answer
 progressques.innerHTML =
"Question " + answer + " of 10"
showques()

}
    })
    
    ol.appendChild(li)
    li.appendChild(button)

  })

  
  ques.appendChild(qbar)
  ques.appendChild(ol)
}

function timer(){
for (let i = 15; i >= 0; i--) {
    setTimeout(
      () => {
        sec.innerHTML = i + "sec";
      },
      (16 - i) * 1000,
    );
  }
}

