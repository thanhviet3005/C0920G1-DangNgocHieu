let testYear= parseInt(prompt(" input year = "));
let testY100= testYear % 100 === 0 ;
let testY400= testYear % 400 === 0 ;
let testY4= testYear % 4 === 0 ;
/* điều kiện là %100 == 0 là đúng thì tiếp %400 = 0
    còn khi %100==0 là sai thì kt tiếp là %4==0 là đúng là năm nhuận
    còn false nữa thì báo ko phải là năm nhuận
    Lưu ý dễ nhầm là trường hợp %4==0 và %100 !=0 là ở những năm số lẻ là năm nhuận*/
if (testY100)
    { if (testY400) {    alert(testYear + " is leap year ") ;   }
    }
else if (testY4)    {   alert(testYear + " is leap year ")  ; }
else {  alert (testYear +" is not a leap year " ) ;   }