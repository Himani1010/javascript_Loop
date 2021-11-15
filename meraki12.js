let i=0
let sum=0
while (i<10){
    let a=require("readline-sync")
    let b=a.questionInt("enter the number")
    sum=sum+b
    i++;
}
console.log(sum);





 
//    OR



let sum = 0;
for (let i = 50; i >= 40; i--){
let input = require('readline-sync');
let number = input.questionInt('Enter the number');
sum = sum +number
};
console.log(sum);


