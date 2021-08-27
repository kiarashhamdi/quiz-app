const quiz =[
{
    question: "Who is making the Web standards?",
    option :[1 , 2 , 3 , 4],
    answer : 1
},
{
    question: "Who is making the Web?",
    option :[1 , 2 , 3 , 4],
    answer : 1
},
{
    question: "Who is making the?",
    option :[1 , 2 , 3 , 4],
    answer : 1
},
{
    question: "Who is making?",
    option :[1 , 2 , 3 , 4],
    answer : 1
},
{
    question: "Who is?",
    option :[1 , 2 , 3 , 4],
    answer : 1
},
]
let question1 =" what is 2 + 5";
let question2 =" what is 8 * 7";
let question3 =" what is 5 - 4";
let question4 =" what is 25 / 4";
let question5 =" what is 78 % 7";
let question6 =" what is 61 + 12";
let question7 =" what is 12 * 25";
let question8 =" what is 28 - 53";
let question9 =" what is 46 / 8";
let question10 =" what is 23 % 6";

function startQuiz(){
document.getElementById("firstPage").style.display = "none";
document.getElementById("question1").style.display ="block";
document.getElementById("question2").style.display ="block";
document.getElementById("question3").style.display ="block";
document.getElementById("question4").style.display ="block";
document.getElementById("question5").style.display ="block";
document.getElementById("nextPage").style.display ="block";
}



for (var a = [0, 1, 2, 3, 4 , 5 , 6 , 7 , 8 , 9], i = a.length; i--; ) {
    var random = a.splice(Math.floor(Math.random() * (i + 1)), 1)[0];
    console.log(random);
document.getElementById(random).innerHTML= question1;
document.getElementById(random).innerHTML= question2;
document.getElementById(random).innerHTML= question3;
document.getElementById(random).innerHTML= question4;
document.getElementById(random).innerHTML= question5;
document.getElementById(random).innerHTML= question6;
document.getElementById(random).innerHTML= question7;
document.getElementById(random).innerHTML= question8;
document.getElementById(random).innerHTML= question9;
document.getElementById(random).innerHTML= question10;

}

