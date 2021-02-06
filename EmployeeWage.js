const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

const IS_ABSENT =0
let empCheck = Math.floor(Math.random() * 10) % 2;
if ( empCheck == IS_ABSENT) {
    console.log("Employee is absent");
    console.log('Daily Emp Wage : 0');

}
else {
     console.log("Employee is present");
     let dailyEmpWage = FULL_TIME_HOURS * WAGE_PER_HOUR; 
     console.log("Daily Emp Wage : " + dailyEmpWage);
}
