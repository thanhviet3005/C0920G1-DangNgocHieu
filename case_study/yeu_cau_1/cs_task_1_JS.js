
function displayInfCus(){
    let t1 , totalOr ;

    let nameCus = document.getElementById("nameC").value ;
    let identifyCus = document.getElementById("identifyC").value ;
    let birthCus = document.getElementById("birthDateC").value ;
    let emailCus = document.getElementById("emailC").value ;
    let addressCus = document.getElementById("addressC").value ;
    let classCus = document.getElementById("classC").value ;
    let typeCus = document.getElementById("typeC").value ;
    let levelCus = document.getElementById("levelC").value ;
    let quantityCus = parseInt(document.getElementById("quantityC").value) ;
    let rentDayCus = parseInt(document.getElementById("rentDayC").value) ;
    let saleOffCus = parseInt(document.getElementById("saleOffC").value) ;
    // Dưới đây là tính giá khi chọn các trường hợp là thuê villas, house, hay room.
    // t1 là biến tạm ;
    switch (typeCus) {
        case "Vilas": t1 = 500 ; break ;
        case "House": t1 = 300 ; break ;
        case "Room" : t1 = 100 ; break ;
    }
    totalOr= t1 * quantityCus * rentDayCus * ( 1- saleOffCus/100) ;

    document.getElementById("outNameC").innerText = nameCus ;
    document.getElementById("outIdentifyC").innerHTML = identifyCus ;
    document.getElementById("outBirthDateC").innerHTML = birthCus ;
    document.getElementById("outEmailC").innerHTML = emailCus ;
    document.getElementById("outAddressC").innerHTML = addressCus ;
    document.getElementById("outClassC").innerHTML = classCus ;
    document.getElementById("outTypeC").innerHTML = typeCus ;
    document.getElementById("outLevelC").innerHTML = levelCus ;
    document.getElementById("outQuantityC").innerHTML = quantityCus ;
    document.getElementById("outRentDayC").innerHTML = rentDayCus ;
    document.getElementById("outSaleOffC").innerHTML= saleOffCus ;
    document.getElementById("result1").innerHTML = totalOr ;
    // document.write("ho te"+nameCus+"<br>"+"cmnd"+identifyCus+"<br>");
}