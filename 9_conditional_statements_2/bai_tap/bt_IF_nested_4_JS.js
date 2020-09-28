function checknum(){
    let num1= parseInt(document.getElementById("number1").value) ;
    let num2= parseInt(document.getElementById("number2").value) ;
    let num3= parseInt(document.getElementById("number3").value) ;

    (num1 >= num2 && num1 >= num3) ? (document.getElementById("result").innerHTML="Max = "+num1)  :
        (num2 >= num3)? (document.getElementById("result").innerHTML="Max = "+num2) :
            (document.getElementById("result").innerHTML="Max ="+num3) ;
}