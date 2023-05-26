let name = prompt("Enter your full name.");
let physics=parseInt( prompt ("Enter your Physics marks"));
let algorithm=parseInt( prompt("Enter your Algorithm marks"));
let math=parseInt( prompt("Enter your Math marks"));
let dataCom =parseInt( prompt("Enter your Data Communication Marks"));

let result= (physics + algorithm + math + dataCom) / 4;

if( result> 100){
    document.write(`${name},your Mark is Invalid!`);
}

else if(result>=93 && result<100){
    document.write(`${name} your Grade is A and CGPA is 4.00`);
}

else if( result>= 89 && result< 93) {
    document.write(`${name} your Grade is A- and CGPA is 3.70`); 
}

else if( result>= 86 && result< 89) {
    document.write(`${name} your Grade is B+ and CGPA is 3.30`); 
}

else if( result>= 82 && result< 86) {
    document.write(`${name} your Grade is B- and CGPA is 2.70`); 
}

else if( result>= 79 && result< 82) {
    document.write (`${name} your Grade is C+ and CGPA is 2.30`); 
}

else if( result>= 72 && result< 75) {
    document.write(`${name} your Grade is C and CGPA is 2.00`); 
}

else if( result>= 69 && result< 72) {
    document.write(`${name} your Grade is C- and CGPA is 1.70`); 
}

else if( result>= 65 && result< 69) {
    document.write(`${name} your Grade is D+ and CGPA is 1.30`); 
}

else if( result>= 60 && result< 65) {
    document.write(`${name} your Grade is D and CGPA is 1.00`); 
}

else{
    document.write(`${name} your Grade is F and CGPA is 0.00`);
}