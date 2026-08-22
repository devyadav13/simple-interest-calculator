function calculateInterest() {
    const principal = Number(document.getElementById("principal").value);
    const rate = Number(document.getElementById("rate").value);
    const time = Number(document.getElementById("time").value);

    if (principal <= 0 || rate <= 0 || time <= 0) {
        document.getElementById("result").innerText =
            "Please enter valid values.";
        return;
    }

    const simpleInterest = (principal * rate * time) / 100;
    const totalAmount = principal + simpleInterest;

    document.getElementById("result").innerHTML =
        `Simple Interest: ₹${simpleInterest.toFixed(2)}<br>
         Total Amount: ₹${totalAmount.toFixed(2)}`;
}