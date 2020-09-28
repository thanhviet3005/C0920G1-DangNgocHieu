function rootEquationSecond() {
    let a1 = parseFloat(document.getElementById("numA").value);
    let b1 = parseFloat(document.getElementById("numB").value);
    let c1 = parseFloat(document.getElementById("numC").value);
    let delta1 = b1*b1 - 4*a1*c1 ;
    let x1 = (-b1 + Math.sqrt(delta1)) / (2*a1) ;
    let x2 = (-b1 - Math.sqrt(delta1)) / (2*a1) ;
    let x3 =  -b1/(2*a1) ;

    if(a1 == 0 || delta1 < 0)
        {document.getElementById("result0").innerHTML="Equation is not root"  }
    else if(delta1 == 0)
        {document.getElementById("result0").innerHTML="Equation is 1 root"
        document.getElementById("result3").innerHTML = x3 ;
        }
    else if (delta1 > 0)
        {document.getElementById("result0").innerHTML="Equation is 2 root"  ;
        document.getElementById("result1").innerHTML = x1 ;
        document.getElementById("result2").innerHTML = x2 ;
        }
    else
        {document.getElementById("result0").innerHTML="Wrong input" ; }
}

