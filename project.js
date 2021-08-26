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
let rand1 = Math.floor(Math.random() * 5);
let rand2 = Math.floor(Math.random() * 5);
let rand3 = Math.floor(Math.random() * 5);
let rand4 = Math.floor(Math.random() * 5);
let rand5 = Math.floor(Math.random() * 5);
while(rand1 == rand2 || rand1 == rand3 || rand1 == rand4 || rand1 == rand5 || rand2 == rand3 || rand2 == rand4 || rand2 == rand5 || rand3 == rand4 || rand3 == rand5 || rand4 == rand5 || rand1 == rand2 == rand3 || rand1 == rand2 == rand4 || rand1 == rand2 == rand5 || rand2 == rand3 == rand4|| rand2 == rand3 == rand5 || rand3 == rand4 == rand5 || rand1 == rand2 == rand3 == rand4 || rand1 == rand2 == rand3 == rand5 || rand5 == rand2 == rand3 == rand4 || rand1 == rand2 == rand3 == rand4 == rand5){
    rand2 = Math.floor(Math.random() * 5);
    rand3 = Math.floor(Math.random() * 5);
    rand4 = Math.floor(Math.random() * 5);
    rand5 = Math.floor(Math.random() * 5);
}
console.log(rand1);
console.log(rand2);
console.log(rand3);
console.log(rand4);
console.log(rand5);
document.getElementById(rand1).innerHTML =question1;
document.getElementById(rand2).innerHTML =question2;
document.getElementById(rand3).innerHTML =question3;
document.getElementById(rand4).innerHTML =question4;
document.getElementById(rand5).innerHTML =question5;