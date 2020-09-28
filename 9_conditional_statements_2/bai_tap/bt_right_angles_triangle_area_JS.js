function areaTri(){
    let side1= parseFloat(document.getElementById("s1").value) ;
    let side2 = parseFloat(document.getElementById("s2").value) ;
    let area = side1 * side2 /2 ;

    if (side1 > 0 && side2 >0)
        {area ; }
    else
        {area = "Wrong input" ;}
    document.getElementById("area").innerHTML = area ;
}