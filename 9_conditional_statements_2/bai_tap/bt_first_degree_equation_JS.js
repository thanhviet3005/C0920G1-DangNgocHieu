function rootEquationFirst() {
    let a1 = parseFloat(document.getElementById("num1").value);
    let b1 = parseFloat(document.getElementById("num2").value);
    let c1 = parseFloat(document.getElementById("num3").value);
    let x1 = (c1 - b1) / a1;

    document.getElementById("result").innerHTML = x1;
}