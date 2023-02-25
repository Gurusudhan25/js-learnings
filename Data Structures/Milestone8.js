/**Date-Time stamp
 * formatting dates , date comparison
 * UTC , timezone offset,epoch
 * Date conversion
 */

const meetDate = Date();
console.log(typeof meetDate); //String

const newMeetDate = new Date();
console.log(typeof newMeetDate); //Object
console.log(newMeetDate);  //2023-01-10T06:59:52.557Z
console.log(newMeetDate.getDay());  //return day in 0-1-2-3-4-5-6 0->sunday to 6->saturday
console.log(newMeetDate.getDate()); //return today's date
console.log(newMeetDate.getMonth()); //return month in 0 to 11
console.log(newMeetDate.getFullYear()); //returns current year
console.log(newMeetDate.getHours()); // hour value
console.log(newMeetDate.getMinutes()); //minute value
console.log(newMeetDate.getSeconds()); //second value
console.log(newMeetDate.getMilliseconds()); //return millisecods b/w 0  to 999
console.log(newMeetDate.getTime());  //returns value of miliseconds calculeted with 1970
console.log(newMeetDate.getTimezoneOffset()); //returns timezone

const milliSecond  = new Date(0);
console.log(milliSecond); //1970-01-01T00:00:00.000Z ->created date object on this date

//Date using string method
/**Value should be in the order of "Month Date Year hours:minutes:seconds" in et-US */
let stringDate = new Date ("dec 25 2001 12:17:18")
console.log(stringDate.getFullYear()); //2001
console.log(stringDate.getDay()); //2->Tuesday
stringDate = new Date ("01 06 1969 08:18:30");
console.log(stringDate.getFullYear()); //1969
console.log(stringDate.getDate()); //06
console.log(stringDate.getMinutes()); //18

//Component mode
/**Value should be in the order of "Year Month Date hours:minutes:seconds" */
const componentDate = new Date(2001,13,13)
console.log(componentDate);

const todayDate = new Date();
const newDate  = todayDate.toLocaleString('default',{
    month:"long",
    // weekday:"long",
    day:"2-digit",
    year:"2-digit"
})
console.log(newDate); //(Tuesday,) 10 January, 23 -> without default it works with number

//Formatting DateTime
let date = new Date();
const us = Intl.DateTimeFormat("en-US").format(date);
const ind = Intl.DateTimeFormat("en-IN").format(date);
const can = Intl.DateTimeFormat("en-CA").format(date);
console.log(us, ind, can); //1/10/2023 10/1/2023 2023-01-10

//Comparing dates
const dateNow = new Date();
//console.log(dateNow.getDate());
const sampleDate = new Date("2019 03 07");
//console.log(sampleDate.getDate());
const diffValueOfDates = dateNow.getDate() - sampleDate.getDate();
console.log(diffValueOfDates);
const diffValueOfMonth = dateNow.getMonth() - sampleDate.getMonth();
console.log(diffValueOfMonth);
const diffValueOfYear = dateNow.getFullYear() - sampleDate.getFullYear();
console.log(diffValueOfYear);

function dateDiff(date1, date2) {
  const _MS_ = 1000 * 60 * 60 * 24;
  return Math.abs(Math.floor((date1 - date2) / _MS_));
}
const dateOne = new Date();
const dateTwo = new Date("jan 15 2023");
const difference = dateDiff(dateOne, dateTwo);
console.log(
  `The difference betwwen ${dateOne.toLocaleString("en-IN", {
    month: "long",
    day: "2-digit",
    year: "numeric",
  })} and ${dateTwo.toLocaleString("en-IN", {
    month: "long",
    day: "2-digit",
    year: "numeric",
  })} is ${difference} days`
);

//Set methods
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/
const eve = new Date("January 18, 2023 20:12:40");
eve.setDate(25);
console.log(eve.getDate());
// expected output: 25
eve.setDate(40);
// Only 31 days in jan!
console.log(eve.getDate());
// expected output: 9
eve.setMonth(10);
console.log(
  eve.toLocaleString("default", {
    month: "long",
  })
); //November

//Timestamp method
const stamp =1078290
const timeStampConverter = (stamp) => {
    const dateStamp = new Date(stamp*1000);
    const hour = dateStamp.getUTCHours().toString().padStart(2,0)
    const minute = dateStamp.getUTCMinutes().toString().padStart(2,0)
    const sec = dateStamp.getUTCSeconds().toString().padStart(2,0)
    console.log(`${hour}:${minute}:${sec}`); 
}
timeStampConverter(stamp);
