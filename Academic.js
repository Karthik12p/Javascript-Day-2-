// var scholarship="Merit-Based";
var GPA=3.0;
var extracurricular=2;
var community=100;

if(scholarship="Merit-Based"){
    if(GPA>=3.5){
        console.log("scholarship");
    }
}

if(scholarship="Leadership"){
    if(extracurricular<=2 && GPA>=3.0 && GPA<=3.4){
        console.log("Leadership");
    }
}

if(scholarship="Community"){
    if(community>=100 && GPA>=2.5 && GPA<=2.9)
        console.log("Community");
}


