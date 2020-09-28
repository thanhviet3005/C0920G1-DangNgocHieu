function month12() {
let inMonth=parseInt(document.getElementById("inM").value) ;
    switch (inMonth) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            document.getElementById("result").innerHTML="31 ngay" ;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            document.getElementById("result").innerHTML= "30 days" ;
            break;
        case 2:
            document.getElementById("result").innerHTML= "28-29 days" ;
            break;
        default:
            document.getElementById("result").innerHTML= "Wrong input" ;
            break;
    }
}
/*;*/