let data = [
    {
    Q : "Q : National flower of Pakistan?",
    a :  "Rose",
    b :  "Sunflower",
    c :   "Jasmine",
    d :   "Lilly",
    ans :  "ans3",
},
{
    Q : "Q : HTML stand for?",
    a :  "High text Multi Language",
    b :  "Hyper text Markup Language",
    c :   "High Time Media Language",
    d :   "Hyper transform Multy Limited",
    ans :  "ans2",
},
{
 Q : "Q : Java Script is used For?",
    a :  "Frontened",
    b :  "Animation",
    c :   "Dynamically update Content",
    d :   "Backend",
    ans :  "ans3",
},
{
    Q : "Q : What is the Fullform of JS?",
    a : "JavaScript",
    b : "JavaScience ",
    c : "JavaS",
    d : "Javasecure",
    ans :  "ans1",
},
{
    Q : "Q : Who developed JS?",
    a : "Santa",
    b : "Brenden Eich",
    c : "George",
    d : "Neck",
    ans : "ans2",
},
{
    Q : "Q : When did JS develop?",
    a : "1995",
    b : "1990",
    c : "1999",
    d : "1892",
    ans : "ans1"
}
]

let question = document.getElementById("qns");
let option1 = document.getElementById("opt1");
let option2 = document.getElementById("opt2");
let option3 = document.getElementById("opt3");
let option4 = document.getElementById("opt4");
let option5 = document.getElementById("opt5");
let option6 = document.getElementById("opt6");

let answers = document.querySelectorAll(".options");
let num = 0;
let score = 0;
let myScore = document.querySelector(".myScore");
let nextBtn = document.getElementById("next");

question.innerHTML=data[num].Q;
option1.innerHTML=data[num].a;
option2.innerHTML=data[num].b;
option3.innerHTML=data[num].c;
option4.innerHTML=data[num].d;

function checkAns(){
let ans;
 answers.forEach((curElement)=>{
 if(curElement.checked){ 
    ans = curElement.id;
    console.log(ans);
 }
})
return ans;
    
}
 function disSelect(){
    answers.forEach((curElement)=>{
        curElement.checked=false;
    })
 }
function next(){

    let checkedAns = checkAns();

    if(checkedAns == data[num].ans){
       score++;
    }
    num++;
    disSelect();

if(num < data.length){
question.innerHTML=data[num].Q;
option1.innerHTML=data[num].a;
option2.innerHTML=data[num].b;
option3.innerHTML=data[num].c;
option4.innerHTML=data[num].d;
  } else {
    myScore.innerHTML = `You Scored ${score}/${data.length}<br><button onclick="location.reload()">Play Again</button>`;
    nextBtn.style.display="none";
  }
}
