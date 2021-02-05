console.log('Welcome to EmployeeWage Computation');

const WAGE_PER_HOUR=20;

let empHrs=0;
let empCheck=Math.floor(Math.random()*10)%3;
switch(empCheck){
    case 1 : 
        empHrs = 1;
        break;
    case 2:
        empHrs = 2;
        break;
    default:
        empHrs=0;
}

let empWage = empHrs * WAGE_PER_HOUR;
console.log("Daily Emp Wage :" +empWage);
