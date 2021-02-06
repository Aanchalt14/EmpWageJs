const FULL_TIME_HOURS = 10;
const WAGE_PER_HOUR = 20;
const PART_TIME_HOUR=8;

const IS_ABSENT =0
let empCheck = Math.floor(Math.random() * 10) % 2;
if ( empCheck == IS_ABSENT) {
    console.log("Employee is absent");
    console.log('Part time Emp Wage : 0');

}
else {
     console.log("Employee is present");
     let dailyEmpWage = PART_TIME_HOUR * WAGE_PER_HOUR; 
     console.log("Part time  Emp Wage : " + dailyEmpWage);
}
