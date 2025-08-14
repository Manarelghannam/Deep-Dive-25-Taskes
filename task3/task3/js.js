//creat variable
const student_name="Manar Mohamed";
let student_age=20;
var enrollment_statue="true";
let grades=[100,90,100];

console.log("my name is" + student_name,"my age is" + student_age,"enorllment status" + enrollment_statue ,"my grades in math,english,sience"+grades);
//Operator
let total_grades=grades[0]+grades[1]+grades[2];

let average=total_grades/grades.length;

let passed=average>=60;

console.log("total_grades" +total_grades);
console.log("avareg_grades" +average);
console.log("is passed" +passed);
//if,else_if
if(average>=90){
    console.log("Excellent");
}
else if (average>=75) {
    console.log("Very Good");
} else if (average>=60){
    console.log("Good");
} else{
    console.log("failled");
}
//swith
let subject_number = parseInt(prompt("enter subject number 1,2or 3"));
switch(subject_number){
    case 1:22
        console.log("Math:" +grades[0]);
        break;
        case 2:
        console.log("science:" +grades[1]);
        break;
        case 3:
        console.log("english:" +grades[2]);
        break;
        default:
            console.log(" invaild subject number");
        
}
//loop
for(let i=0;i<grades.length;i++){
    console.log("grade"+(i+1) ,":" ,+grades[i]);
}
//function
function calc_total(grades){
    let total=0;
    for(let i=0;i<grades.length;i++){
        total+=grades[i];
    }
    return total;
}
 const calc_avareg=(grades) =>{
    let total=calc_total(grades);
    return total/grades.length;
 }
 let totalGrades = calc_total(grades);
let averageGrades = calc_avareg(grades);

console.log("Total Grades:", totalGrades);
console.log("Average Grades:", averageGrades);
//while
let num = 10;

while (num < 10) {
    console.log("done");
}
//do while
let num2 = 10;

do {
    console.log("done");
} while (num2 < 10);

 let numbers=[1,2,3,4,5,6];
 let sum1=0;
  for(let i=0;i<numbers.length;i++){
      sum1+=numbers[i];
  }
  console.log("sum using for loop",+sum1);

  let sum2=0;
  let i=0;
  while(i<numbers.length){
    sum2+=numbers[i];
    i++;
  }
  console.log("sum using while loop",+sum2);