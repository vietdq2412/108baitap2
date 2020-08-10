function convert() {
    let from = document.getElementById("fcurrency").value;
    let to = document.getElementById("tcurrency").value;
    let amount = document.getElementById("amount").value;
    let result = 0;
    if (from == "VND" && to == "USD") {
        result = amount / 23000;
    } else if (from == "USD" && to == "VND") {
        result = amount * 23000;
    } else {
        result = amount;
    }
    alert('result:' + result);

}