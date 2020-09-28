function asubB(){
    let numberA = parseFloat(document.getElementById("number1").value) ;
    let numberB= parseFloat(document.getElementById("number2").value) ;
    let ansAB = (numberA % numberB);
    if (ansAB==0)
        { document.getElementById("result1").innerHTML= "a%b = 0"}
    // {alert('0')}
    else
        { document.getElementById("result1").innerHTML= "a%b != 0"}
}

