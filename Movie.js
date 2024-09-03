var dayofweek="weekends";
var customersage="75";
var ticket=15;

if(dayofweek="weekdays"){
    if(customersage>=65 || customersage<=12 ){
        console.log(ticket=ticket-(ticket*50/100));
    }
    else{
        console.log("Invalid");
    }
}
else if(dayofweek="weekends"){
    if(customersage>=65 || customersage<=12 ){
        console.log(ticket=ticket-(ticket*30/100) );
    }
    else{
        console.log("Invalid");
    }

}