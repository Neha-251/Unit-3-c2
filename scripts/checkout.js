function placeOrder(e){

e.preventDefault();
    let message = {
        p1 : "Your order is accepted",
        p2 : "Your order is being cooked",
        p3 : "Your order is ready",
        p4 : "Order out for delivery",
        p5 : "Order delivered"
    }

    setTimeout(() => {
        console.log("Your order is accepted");
        alert("Your order is accepted")
    }, 0000);

    setTimeout(() => {
        console.log("Your order is being cooked");
        alert("Your order is being cooked")
    }, 3000);
    setTimeout(() => {
        console.log("Your order is ready");
        alert("Your order is ready")
    }, 8000);
    setTimeout(() => {
        console.log("Order out for delivery");
        alert("Order out for delivery")
    }, 10000);
    setTimeout(() => {
        console.log("Order delivered");
        alert("Order delivered");
        window.location.href = "thankyou.html";
    }, 12000);


}