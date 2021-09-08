// wap to print reverse of digit  numbers using while loop
var number= 543;
reverse=0;
remainder=0;
console.log(number)
while(number!=0){
    remainder=number%10;
    reverse=(reverse*10)+remainder;
    number=parseInt(number/10);
    console.log(reverse);
}

