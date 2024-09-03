var customers = "VIP";
var amount=100;

if (customers =="Regular") {
    if (amount<100 && amount>0) {
        // amount=amount-(amount*0/100);
        console.log("amount");
    }
    else if(amount>=100 && amount<=500){
    amount = amount - (amount * 5 / 100);
    console.log("amount",amount);
    }
    else if(amount>500){
    amount = amount - (amount * 10 / 100);
    console.log("amount",amount);
    }
    else{
        console.log("Invalid Amount")
    }

}

if(customers=="VIP"){
    if (amount<100 && amount>0) {
    amount = amount - (amount * 10 / 100);
    console.log("amount",amount);
    }
    else if(amount>=100 && amount<=500){
    amount = amount - (amount * 15 / 100);
    console.log("amount",amount);
    }
    else if(amount>500){
    amount = amount - (amount * 20 / 100);
    console.log("amount",amount);
    }
    else{
        console.log("Invalid Amount")
    }

}






