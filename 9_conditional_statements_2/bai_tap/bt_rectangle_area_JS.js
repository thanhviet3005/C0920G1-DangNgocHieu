function areaRect(){
    let weight1= parseFloat(document.getElementById("w1").value) ;
    let height1 = parseFloat(document.getElementById("h1").value) ;
    let area = weight1 * height1 ;

    if (weight1 > 0 && height1 > 0)
        { area ; }
    else
        { area = "wrong input" ;}
    document.getElementById("area")["innerHTML"] = area ;
}
