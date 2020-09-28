
function vat_income() {
    let totalIn = parseInt(document.getElementById("number1").value) ;
    let exempAm = parseInt(document.getElementById("number2").value) ;
    let taxRe = parseInt(document.getElementById("number3").value) ;
    let vatOr ;
    let vatRa ;
    let t1 = totalIn - exempAm - taxRe ;
    //Đoạn này tính tỉ lệ % thuế phải nộp khi biết tổng thu nhập - các khoản miễn và giảm
    if ( totalIn >= 0 && exempAm >= 0 &&taxRe >= 0 && 0 < t1 && t1 <= 5 )
    { vatRa = 5 ; }
    else if (t1 <= 10)
    { vatRa = 10 ; }
    else if (t1 <= 18)
    { vatRa = 15 ; }
    else if (t1 <= 32)
    { vatRa = 20 ; }
    else if (t1 <= 52)
    { vatRa = 25 ; }
    else if (t1 <= 80)
    { vatRa = 30 ; }
    else if (80< t1)
    { vatRa = 35 ; }
    else
    { vatRa= 0 ; }
    document.getElementById("vatRate").innerHTML= vatRa ;
//Đoạn này tính tiền thuế phải nộp khi biết tổng thu nhập - các khoản miễn và giảm
    vatOr = t1 * vatRa/100 ;
    document.getElementById("result1").innerHTML= vatOr ;
}

