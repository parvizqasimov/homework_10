let firstName = "Parviz"
let lastName = "Qasimov"

function printFullName (lastName,firstName){
    return (lastName +" " + firstName)};
    console.log(printFullName(lastName,firstName));

let printFullNameWithParam = (lastName , firstName) => lastName + " " + firstName;
console.log(printFullName(lastName,firstName));



let width = 12
let length = 6

function perimeterOfRectangle (width,length){
    return (2*(width+length));
}
console.log(perimeterOfRectangle(width,length));


let weight =70
let height = 174

function bodyMassIndex (weight,height){
   return  (weight/((height/100)*(height/100)))
};
console.log(bodyMassIndex(weight,height));

let BMI = bodyMassIndex(weight,height);

if(BMI<18.5){
    console.log("Underweight")}
else if (BMI>=18.5 & BMI<25){
    console.log("Normal")
}
else if (BMI>=25 & BMI<30){
    console.log("Overweight")
}
else {
    console.log("Obese")
};









