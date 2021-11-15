let a=require("readline-sync")
let b=a.questionInt("enter the number")
let i=0
let count=0
while (i<=b){
    if (b%i===0){
        count=count+1
    }
    i++;
}
if (count==2){
    console.log(b,"is prime number")
}
else{
    console.log(b,"is not prime number")
}