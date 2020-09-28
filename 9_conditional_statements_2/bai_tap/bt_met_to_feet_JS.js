function meterToFeet(){
    let meter1= parseFloat(document.getElementById("meterS").value)  ;
    let feet1= meter1 * 3.2808 ;
    document.getElementById("result").innerHTML=  feet1 ;
}