function ageCh() {
    let age1 = parseInt(document.getElementById("age").value) ;
    let t1 = 'x' ;
    if (0 < age1 && age1 < 120)
    { t1 = "This is years old human" ; }
    else
    { t1 = "this is NOT years old human" ; }
    document.getElementById("result").innerHTML = t1 ;
}