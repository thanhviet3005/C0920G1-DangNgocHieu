function areaSquare(){
    let sideLength1= parseFloat(document.getElementById("length").value) ;
    let area = sideLength1 * sideLength1 ;

    document.getElementById("area").innerHTML =   + area ;
}
