//store number

isN1 = true
let n1= '';
let n2= '';
let operation;
let expression = '';

function getNum(i){
    if(isN1){
        digit = document.getElementById(i).value;
        n1 += digit
        expression+=digit;

    }
    else{
        digit = document.getElementById(i).value;
        n2 += digit
        expression += digit ;
    }
    document.getElementById("expression").innerHTML = expression;
}

function getOp(o){
    isN1 = false;
    operation = o
    expression+=operation;
    console.log(expression)
    document.getElementById("expression").innerHTML = expression;
}

function doClear(){
    console.log("clear");
    isN1 = true;
    n1 =  '';
    n2 =  '';
    expression = "";
    document.getElementById("result").innerHTML = "";
    document.getElementById("expression").innerHTML = "";
}

function doCalc(){
    let result;

    if(operation == "+"){
        result = Number(n1) + Number(n2)
    }
    else if(operation == "-"){
        result = Number(n1) - Number(n2)
    }
    else if(operation == "*"){
        result = Number(n1) * Number(n2)
    }
    else if(operation == "/"){    
        if(n2 == 0){
        result = "Undefined"
        }
        else{
            result = Number(n1) / Number(n2)
        }
    }

    isN1 = true;
    n1 =  '';
    n2 =  '';
    expression = '';
    document.getElementById("result").innerHTML = result; 
}