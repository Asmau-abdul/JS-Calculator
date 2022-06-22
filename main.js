let first_num = parseInt(prompt("Enter your first number"));
let second_num = parseInt(prompt("Enter yor second number"));
let operator = prompt("Enter an operator");
let calculate;

if(operator == "+"){
    calculate = first_num + second_num;
}
else if(operator == "-"){
    calculate = first_num - second_num;
}
else if(operator == "*"){
    calculate = first_num * second_num;
}
else if(operator == "/"){
    calculate = first_num / second_num;
}
else if(operator == "%"){
    calculate = first_num % second_num;
}
else{
    calculate = "Operator not available";
}

alert(calculate);