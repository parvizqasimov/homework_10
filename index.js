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

function findMax (numberArray){
    let max = numberArray[0];
    for( let i=0;i< numberArray.length;i++){
        if(numberArray[i]> max){
            max = numberArray[i]
        }
    }
    return max;
}
 let numberArray = [0,10,5];
 let max= findMax(numberArray);
 console.log(max);
 numberArray = [0,-10,-2];
 max= findMax(numberArray);
 console.log(max);


 function pow (a,b){
    let result = 1;
    for ( i=0; i<b;i++){
        result =a * result;
    }
    return result;
 }
 let a =3;
 let b =4;
 let result = pow(a,b);
 console.log (result);






