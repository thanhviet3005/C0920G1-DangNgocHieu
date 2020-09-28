function checknum(){
    let num1= parseInt(document.getElementById("number1").value) ;
    let num2= parseInt(document.getElementById("number2").value) ;
    let num3= parseInt(document.getElementById("number3").value) ;
    let totalpoint= num1*0.2 + num2*0.3 + num3*0.5 ;
    let t1 ;
    if (totalpoint < 5 && totalpoint >= 0)
        { t1=" = weak"; }
    else if (totalpoint < 7)
        { t1= " = average" ; }
    else if (totalpoint < 8)
        { t1 = " = good" ; }
    else if (totalpoint < 10)
        { t1 = " = excellent" ; }
    else
        { t1= " = wrong input" ; }
    document.getElementById("result").innerHTML= totalpoint + t1 ;
}