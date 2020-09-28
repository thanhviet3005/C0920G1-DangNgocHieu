function phoneOder() {
    let minuteS1 = parseInt(document.getElementById("minuteS").value) ;
    let secondS1 = parseInt(document.getElementById("secondS").value) ;
    let price1 = parseInt(document.getElementById("price").value) ;
    let money1 = parseFloat((minuteS1 + secondS1/60) * price1) ;

    (minuteS1 >= 0 && secondS1 >= 0 && price1 >= 0 )? (money1) : ( money1 = "wrong input" ) ;
    document.getElementById("money").innerHTML = money1 + "$"
}