let customerName = prompt("Enter Customer Name: ");

function Discount(){

    let amount = Number(document.getElementById('amount').value);
    let Discount = 5;

    let Discount_amount = (amount * Discount)/ 100;

    let Total_amount = amount - Discount_amount;

    document.getElementById('total').innerHTML = `<h2 class="Name"> Customer Name: ${customerName}</h2>
    <h3 class="pr_amount"> Purchase Amount: ${amount}</h3>
    <h3 class="di_amount"> Discount Amount: ${Discount_amount}</h3>
    <h3 class="d"> ====================================</h3>
    <h3 class="to_amount">Total Amount : ${Total_amount}`;
}