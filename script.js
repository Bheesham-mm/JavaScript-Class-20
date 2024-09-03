// Explain Code 
// The following commented-out code demonstrates how to get the current date and time and its type.
var currentDate = new Date();
console.log(currentDate);
console.log(typeof currentDate);
var currentdate = new Date();
var currentDay = currentdate.getDay();
console.log(currentDay);/* Assignment */
weekName, Date, Month, year, (hours, minutes)
// Example output: Thursday, 15, August, 2024, (16:51)
// Array containing the names of the days of the week.
var currentWeekN = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// Array containing the names of the months of the year.
var currentMonthN = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// Create a new Date object representing the current date and time.
var currentDate = new Date();
// Get the current day of the week as a number (0 for Sunday, 1 for Monday, etc.).
var currentWeek = currentDate.getDay();
// Get the current day of the month.
var currentDate1 = currentDate.getDate();
// Get the current month as a number (0 for January, 1 for February, etc.).
var currentMonth = currentDate.getMonth();
// Convert the month number to the month name using the currentMonthN array.
var currentMonthName = currentMonthN[currentMonth];
// Get the current year as a 4-digit number.
var currentYear = currentDate.getFullYear();
// Get the current hour in 24-hour format.
var currentHours = currentDate.getHours();
// Get the current minutes.
var currentMinutes = currentDate.getMinutes();
// Convert the day number to the day name using the currentWeekN array.
var Week = currentWeekN[currentWeek];
// Format the date and time as a string in the specified format.
var WeekSet = Week + " " + currentDate1 + " " + currentMonthName + " " + currentYear + " (" + currentHours + ":" + currentMinutes + ")";
// Output the formatted date and time string to the console.
console.log(WeekSet);

/* // var currentDate = new Date();
// console.log(currentDate)
// console.log(typeof currentDate)
// var currentdate = new Date();
// var currentDay = currentdate.getDay();
// console.log(currentDay)
/* Assignment */
// weekName,Date,Month,year, (houres,minuts)
// Thursday, 15, Auguest, 2024, (16:51) */

// var currentWeekN = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
// var currentMonthN = ["January", "February", "March", "April", "May", "June", "July", "Auguest", "Septemeber", "Octumber", "November", "December"]
// var currentDate = new Date();
// // console.log(currentDate)
// var currentWeek = currentDate.getDay();
// var Week = currentWeekN[currentWeek]
// var currentDate1 =currentDate.getDate()
// var currentMonth = currentDate.getMonth();
// var currentMonthName = currentMonthN[currentMonth] 
// var currentYear = currentDate.getFullYear();
// var currentHours = currentDate.getHours();
// var currentMinutes = currentDate.getMinutes();
// var WeekSet = Week+" "+currentDate1+" "+currentMonthName+" "+currentYear+" "+"("+currentHours+":"+currentMinutes+")";
// console.log(WeekSet)