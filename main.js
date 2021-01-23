// Simple function to create calculations. If you divide by zero, the anwer is undefined!
function calc() {
    var a = parseInt(document.querySelector("#value1").value);
    var b = parseInt(document.querySelector("#value2").value);
    var oper = document.querySelector("#operator").value;
    var calculate;

    if (oper == "add") {
        calculate = a + b;
    }
    else if (oper == "sub") {
        calculate = a - b;
    }
    else if (oper == "mult") {
        calculate = a * b;
    }
    else if (oper == "div") {
        if (b == 0) { 
            calculate = "Undefined, pls try again.";
        } else
        calculate = a / b;
    }

    document.querySelector("#answer").innerHTML = calculate;

}