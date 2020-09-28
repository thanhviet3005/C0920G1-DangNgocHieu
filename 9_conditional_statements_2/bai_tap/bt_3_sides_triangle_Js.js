
function sidesTri() {
    let a1 = parseFloat(document.getElementById("trA").value) ;
    let b1 = parseFloat(document.getElementById("trB").value) ;
    let c1 = parseFloat(document.getElementById("trC").value) ;
    let t ;
// Đoạn này là check 3 cạnh là một tam giác
// Lưu ý là ở chỗ if lồng nhau này là t = NOT được chạy khi 3 cạnh tam giác là số dương nhưng ko tạo thành tam giác
// Còn t = "NOOO!...) là chạy khi 3 cạnh nhập vào bị <=0 thì mới chạy. Nếu ko có lệnh else ở trong thì t sẽ không nhận
//  giá trị "NOOO!..." mà sẽ hiện giá trị là underfine
    if(a1 > 0 && b1 > 0 && c1 > 0)
    {if (a1 + b1 > c1 && b1 + c1 >a1 && a1 + c1 > b1)
    { t = "Yeah, they are 3 side triangle" ;
        document.getElementById("anS1").innerHTML= "Pass" ;
        document.getElementById("anS2").innerHTML= "Pass" ;
        document.getElementById("anS3").innerHTML= "Pass" ;
        document.getElementById("anS4").innerHTML= "Pass" ;
    }
    else
    { t= "NOT"}
    }
    else
    { t = "NOOO! They are NOT 3 side triangle" ;}
    document.getElementById("anS0").innerHTML= t ;
// Đoạn này là cho biết điều kiện nào không thõa mãn, sai ở thông số nào
    if (a1 + b1 < c1)
    { document.getElementById("anS2").innerHTML= "NOT pass" ; }
    else if (b1 + c1 < a1)
    { document.getElementById("anS3").innerHTML= "NOT pass" ; }
    else if (a1 + c1 < b1)
    { document.getElementById("anS4").innerHTML= "NOT pass" ; }
    else if (a1 <=0 || b1 <= 0 || c1 <= 0)
    { document.getElementById("anS1").innerHTML= "NOT pass" ; }
    else
    { document.getElementById("anS5").innerHTML= "" ; }
}