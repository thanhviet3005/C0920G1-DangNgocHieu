function incomeSales() {
    let sales1 = parseInt(document.getElementById("saleS").value);
    let rate1 = parseInt(document.getElementById("rateS").value);
    let t = 'x' ;
    let money1= rate1 * sales1 /100 ;;
    (sales1 >= 0 && rate1 >= 0)? (t= money1 ): (t="wrong input") ;

    document.getElementById("money").innerHTML = t ;
}


    // let num3= parseInt(document.getElementById("number3").value) ;