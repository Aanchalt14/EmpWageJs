const IS_PART_TIME =1;
const IS_FULL_TIME =2 ;
const PART_TIME_HOUR=4;
const FULL_TIME_HOURS =8;
const WAGE_PER_HOUR=20;
let empHrs=0
console.log('Welcome to EmployeeWage Computation');
const IS_ABSENT =0
let empCheck = Math.floor(Math.random() * 10) % 2;
if ( empCheck == IS_ABSENT) {
    console.log("Employee is absent");
}
else 
{
      empCheck=Math.floor(Math.random()*10)%3;
   
     console.log("Employee is present");
     
    
      switch(empCheck)
   {
     case 1 : 
        empHrs = 4;     //part time hour
        break;
     case 2:
       empHrs = 8;     //full time hour
        break;
     default:
        empHrs=0;
    } 
      let empWage = empHrs * WAGE_PER_HOUR;
      console.log("Emp Wage :" +empWage);
}
