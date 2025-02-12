function equivalentCheck(){ //This allows the last value to view untill other button are pressed //boolean 1  or 0
 if(parseInt(document.getElementById('equivalent').value)){
    document.getElementById('equivalent').value = 0;
    document.getElementById('result').value = 0;
 }
}

function input(x) {

    equivalentCheck();

    let y = parseFloat(document.getElementById('result').value);

    if(document.getElementById('decimalVar').value == 0){
        x += y * 10 //multiply the text input by 10 and add the value of x
        document.getElementById('result').value = x; // return x to the text output

    }else{ //if decimal is true
        let decimalCount = parseInt(document.getElementById('decimalVar').value);

        if(decimalCount == 1){
            x*= 1/10; //using math to place the decimal point
            y += x;
            document.getElementById('result').value = y;
        }else{
            document.getElementById('result').value += x;
        }

        decimalCount++;
        document.getElementById('decimalVar').value = decimalCount;

    }
}

function equals(){
    operators(parseInt(document.getElementById('operation').value));
    document.getElementById('result').value = document.getElementById('operand').value;
    document.getElementById('operand').value = "";
    document.getElementById('equivalent').value = 1;
}

function allClear(){
    document.getElementById('result').value=0;
    document.getElementById('operand').value="";
    document.getElementById('operation').value=0;
    document.getElementById('equivalent').value = 0;
}

function plusminus(){   
    let x = document.getElementById('result').value;
    x *= -1;
    document.getElementById('result').value = x;
}

function square(){
    let x = document.getElementById('result').value;
    x*=x;
    document.getElementById('result').value = x;
}

function percent(){
    let x = document.getElementById('result').value;
    x /= 100;
    document.getElementById('result').value = x;
}
function decimal(){
    if(document.getElementById('decimalVar').value == 0 ){ // this function prevents multiple decimal
        document.getElementById('decimalVar').value = 1;
    }

    if(parseInt(document.getElementById('operation').value)){ //if this is an empty string it will return false
        document.getElementById('result').value = 0;
    }

}

function operandCheck(){
    if(document.getElementById('operand').value==""){
        document.getElementById('operand').value = document.getElementById('result').value;
        document.getElementById('equivalent').value = 1;
    }else{
        operatorCheck();
    }
}

function operatorCheck(){
    let a = parseFloat(document.getElementById('operand').value);
    let b = parseFloat(document.getElementById('result').value);

    switch(parseInt(document.getElementById('operation').value)){
        case 1: //addition
            a += b;
            break;

        case 2: //substraction
            a -= b;
            break;

        case 3: //multiplication
            a *= b;
            break;
            
        case 4: //division
            a /= b;
            break;
    }

    document.getElementById('operand').value = a;
    document.getElementById('result').value = a;
    document.getElementById('equivalent').value = 1;

}

function operators(x){
    switch(x){
        case 1:
            document.getElementById('operation').value = 1; //addition
            break;
        case 2:
            document.getElementById('operation').value = 2; //substraction
            break;
        case 3:
            document.getElementById('operation').value = 3; //multiplication
            break;
        case 4:
            document.getElementById('operation').value = 4; //division
            break;
        default:
    }

    operandCheck();
}