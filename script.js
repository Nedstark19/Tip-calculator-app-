const five = 5/100;
const ten = 1/10;
const fivtiin = 15/100;
const twntfv = 1/4;
const fivty = 1/2;

function fun1() {
    var bill_amount = document.querySelector('#bill').value;
    var people = document.querySelector('#people').value;
    if (people !== "" && people !== undefined) {
        var tip_amount = ((five) * parseInt(bill_amount))/ parseInt(people);
        var total_amount =((105/100) * parseInt(bill_amount))/ parseInt(people);

        var tip_result = document.querySelector(".tip_result");
        var total_result = document.querySelector('.amt_result');
        tip_result.innerHTML = '$' + String(tip_amount.toFixed(2));
        total_result.innerHTML = '$' + String(total_amount.toFixed(2));
    }
    else {
        alert('Enter number of People')
    } 
}
function fun2() {
    var bill_amount = document.querySelector('#bill').value;
    var people = document.querySelector('#people').value;
    if (people !== "" && people !== undefined) {
        var tip_amount = ((ten) * parseInt(bill_amount))/ parseInt(people);
        var total_amount =((110/100) * parseInt(bill_amount))/ parseInt(people);

        var tip_result = document.querySelector(".tip_result");
        var total_result = document.querySelector('.amt_result');
        tip_result.innerHTML = '$' + String(tip_amount.toFixed(2));
        total_result.innerHTML = '$' + String(total_amount.toFixed(2));
    }
    else {
        alert('Enter number of People')
    }  
}
function fun3() {
    
    var bill_amount = document.querySelector('#bill').value;
    var people = document.querySelector('#people').value;
    if (people !== "" && people !== undefined) {
        var tip_amount = ((fivtiin) * parseInt(bill_amount))/ parseInt(people);
        var total_amount =((115/100) * parseInt(bill_amount))/ parseInt(people);

        var tip_result = document.querySelector(".tip_result");
        var total_result = document.querySelector('.amt_result');
        tip_result.innerHTML = '$' + String(tip_amount.toFixed(2));
        total_result.innerHTML = '$' + String(total_amount.toFixed(2));
    }
    else {
        alert('Enter number of People')
    }  
}
function fun4() {
    
    var bill_amount = document.querySelector('#bill').value;
    var people = document.querySelector('#people').value;
    if (people !== "" && people !== undefined) {
        var tip_amount = ((twntfv) * parseInt(bill_amount))/ parseInt(people);
        var total_amount =((125/100) * parseInt(bill_amount))/ parseInt(people);

        var tip_result = document.querySelector(".tip_result");
        var total_result = document.querySelector('.amt_result');
        tip_result.innerHTML = '$' + String(tip_amount.toFixed(2));
        total_result.innerHTML = '$' + String(total_amount.toFixed(2));
    }
    else {
        alert('Enter number of People')
    }  
}
function fun5() {
    
    var bill_amount = document.querySelector('#bill').value;
    var people = document.querySelector('#people').value;
    if (people !== "" && people !== undefined) {
        var tip_amount = ((fivty) * parseInt(bill_amount))/ parseInt(people);
        var total_amount =((150/100) * parseInt(bill_amount))/ parseInt(people);

        var tip_result = document.querySelector(".tip_result");
        var total_result = document.querySelector('.amt_result');
        tip_result.innerHTML = '$' + String(tip_amount.toFixed(2));
        total_result.innerHTML = '$' + String(total_amount.toFixed(2));
    }
    else {
        alert('Enter number of People')
    }  
}    

function custom() {
    var cutom_value = parseInt(document.querySelector('#custom').value);
    var bill_amount = document.querySelector('#bill').value;
    var people = document.querySelector('#people').value;
    if (people !== "" && people !== undefined) {
        var tip_amount = ((cutom_value/100) * parseInt(bill_amount))/ parseInt(people);
        var total_amount =(((cutom_value+100)/100) * parseInt(bill_amount))/ parseInt(people);

        var tip_result = document.querySelector(".tip_result");
        var total_result = document.querySelector('.amt_result');
        tip_result.innerHTML = '$' + String(tip_amount.toFixed(2));
        total_result.innerHTML = '$' + String(total_amount.toFixed(2));
        }
    else {
        alert('Enter number of People and then custom %')
    }  
}

function reset() {
    document.querySelector('#bill').value = "";
    document.querySelector('#people').value = "";
    document.querySelector('#custom').value = "";
    document.querySelector(".tip_result").innerHTML = "$0.00";
    document.querySelector('.amt_result').innerHTML = "$0.00";
}
