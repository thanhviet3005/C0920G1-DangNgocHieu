function convertTemp(){
    let celC= parseInt(document.getElementById("celcius").value)  ;
    let farC = parseFloat(celC*9/5 +32) ;

   document.getElementById("result").innerHTML=  farC ;
}