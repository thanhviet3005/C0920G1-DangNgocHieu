function checkage(){
    let ageCh= document.getElementById("age").value
    if(ageCh < 15 && ageCh > 0)
        { document.getElementById("result").innerHTML="Not enough" ;     }
    else
        { document.getElementById("result").innerHTML="Enough years old" ;     }
}