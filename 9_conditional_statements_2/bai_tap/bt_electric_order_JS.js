
function electrOrder() {
    let nmE = parseInt(document.getElementById("numE").value) ;
    let lv1 = parseInt(document.getElementById("level1").value) ;
    let lv2 = parseInt(document.getElementById("level2").value) ;
    let lv3 = parseInt(document.getElementById("level3").value) ;
    let numb1 = parseInt(document.getElementById("num1").value) ;
    let numb2 = parseInt(document.getElementById("num2").value) ;
    let vat1= parseInt(document.getElementById("vat").value) ;
    let money ;
//Tinh tổng giá tiền ứng với mỗi trường hợp, có tính thêm thuế
    if(nmE>0 && lv1>0 && lv2>0 && lv3>0 && numb1>0 &&numb2>0 && vat1>0) {
        if ( nmE <=50)
        { money = nmE * lv1 * ((100+vat1) /100)  ; }
        else if (nmE <= 100)
        { money = ( numb1 * lv1 + (nmE-numb1) * lv2 )*((100+vat1) /100)  ; }
        else
        { money = (numb1 * lv1 + numb2 * lv2 + (nmE-numb1-numb2) * lv3)*((100+vat1) /100) ; }
    }
    else
    { document.getElementById("result2").innerHTML= "Wrong input" ; }

    document.getElementById("result1").innerHTML = money  ;
}


// else if (nmE > 100)
// else
// { document.getElementById("result2").innerHTML= "Wrong input" }