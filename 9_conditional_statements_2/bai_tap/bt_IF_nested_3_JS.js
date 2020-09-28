function checknum(){
    let num1= parseInt(document.getElementById("number").value) >= 0 ;
    if(num1)
    { document.getElementById("result").innerHTML="Your integer number > 0" ;     }
    else
    { document.getElementById("result").innerHTML="Your integer number < 0" ;     }
}