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
question:"What does HTML stand for?",
options:[
"Hyper Text Markup Language",
"High Text Machine Language",
"Hyper Tool Multi Language",
"Home Text Markup Language",
],
correct:"Hyper Text Markup Language",
},

{
question:"Which CSS property changes text color?",
options:["font-style","color","text-color","background"],
correct:"color",
},

{
question:"Which symbol is used for comments in JavaScript?",
options:["//","#","<!-- -->","**"],
correct:"//",
},

{
question:"Which method prints something in browser console?",
options:["console.print()","print()","console.log()","display()"],
correct:"console.log()",
},

{
question:"Which company developed JavaScript?",
options:["Google","Microsoft","Netscape","Apple"],
correct:"Netscape",
},

{
question:"Which keyword creates a variable in JavaScript?",
options:["var","define","make","create"],
correct:"var",
},

{
question:"What does CSS stand for?",
options:[
"Creative Style Sheets",
"Computer Style Sheets",
"Cascading Style Sheets",
"Colorful Style Sheets",
],
correct:"Cascading Style Sheets",
},

{
question:"Which operator checks equality and type in JavaScript?",
options:["=","==","===","!="],
correct:"===",
},

{
question:"Which HTML tag inserts an image?",
options:["<pic>","<image>","<img>","<src>"],
correct:"<img>",
},

{
question:"Which method converts JSON string into object?",
options:[
"JSON.stringify()",
"JSON.parse()",
"JSON.object()",
"JSON.convert()",
],
correct:"JSON.parse()",
},
];

let current = 0;
let score = 0;
let answer = 0;

start.addEventListener("click", () => {

let div = document.createElement("div");
div.id = "startquiz";
div.innerHTML = "Are you sure to start the quiz?";

let yes = document.createElement("button");
yes.className = "button";
yes.innerHTML = "Yes";

yes.addEventListener("click", () => {

div.innerHTML = "Quiz starts in";

timeone(() => {
ques.innerHTML = "";
showques();
});

});

ques.appendChild(div);
ques.appendChild(yes);

start.remove();

});

function timeone(callback){

let timeleft = document.createElement("div");

timeleft.id = "timeleft";

ques.appendChild(timeleft);

for(let i=3;i>0;i--){

setTimeout(()=>{

timeleft.innerHTML=i;

},(4-i)*1000);

}

setTimeout(()=>{

timeleft.remove();

callback();

},3500);

}

function showques(){

if(current>=questions.length){

ques.innerHTML=`
<h2>Quiz Finished</h2>
<p>Score : ${score}/${questions.length}</p>
`;

return;

}

ques.innerHTML="";

timer();

let qbar=document.createElement("div");
qbar.id="qbar";

qbar.innerHTML=
`Q ${current+1} : ${questions[current].question}`;

let ol=document.createElement("ol");

questions[current].options.forEach((option)=>{

let li=document.createElement("li");

let button=document.createElement("button");

button.innerText=option;

button.addEventListener("click",()=>{

answer++;

if(
button.innerText===
questions[current].correct
){
score++;
}

current++;

answered.innerHTML=answer;

points.innerHTML=score;

progressques.innerHTML=
`Question ${answer} of ${questions.length}`;

progressper2.innerHTML=
Math.floor(
(answer/questions.length)*100
)+"%";

showques();

});

li.appendChild(button);

ol.appendChild(li);

});

ques.appendChild(qbar);

ques.appendChild(ol);

}

function timer(){

let sec=15;

time.innerHTML=sec+" sec";

let interval=setInterval(()=>{

sec--;

time.innerHTML=sec+" sec";

if(sec<=0){

clearInterval(interval);

}

},1000);

}