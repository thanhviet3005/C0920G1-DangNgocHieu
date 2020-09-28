
function loanRate() {
    let moneyLo = parseInt(document.getElementById("number1").value ) ;
    let moneyRa = parseInt(document.getElementById("number2").value ) ;
    let monthS = parseInt(document.getElementById("number3").value ) ;
    let moneyTo = moneyLo * Math.pow((100 + moneyRa)/100, monthS ) - moneyLo ;

    if(moneyLo >=0 && moneyRa >=0 && monthS >=0)
    {  document.getElementById("result1").innerHTML= moneyTo ; }
    else
    { document.getElementById("result2").innerHTML= "Wrong input" ;}
}