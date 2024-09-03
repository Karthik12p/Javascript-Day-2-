var age=19;
var participants=105;
// var already registered;
var email="karthik12@email.com";
var mail=email;

if(age>=18 && age<=100 && participants<=100 &&mail){
    console.log("Tickets are available..Please Confirm your seats...");
}
else if(participants>=100){
    console.log("Seats are filled");
}

else if(mail=="karthik12@email.com"){
    console.log("Enter your email...")
}
else{
    console.log("No More Registration are accepted...");
}