let a=require("readline-sync")
let b=a.questionInt("enter the number")
let i=1
while (i<=10){
    let multi=b*i
    console.log(b+"*"+i+"="+multi)
    i++;
}