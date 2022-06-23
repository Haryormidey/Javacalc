
const number1 = parseInt(prompt('Number 1: '))
const number2 = parseInt(prompt('Number 2: '))


const opr = prompt('Operator (+,-,/,*): ')
let result = 0;

if(isNaN(number1) || isNaN(number2)){
    alert('Wrong input!');
}else{
        if (opr == "+")
    {
        result = (number1 + number2);
    } else if (opr == "-")
    {
        result = (number1 - number2);
    } else if (opr == "*")
    {
        result = (number1 * number2);
    } else if (opr == "/")
    {
        result = (number1 / number2);
    }
    alert(number1  + opr  + number2 + '=' + result)
}
