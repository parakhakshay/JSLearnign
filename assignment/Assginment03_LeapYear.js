
// %=remainder should be zero to calculate the leap year
// console.log(+'ddd'); = will create NaN value and then we can use isNaN to check if input value is NaN or not

var leapYear = function (year) {
  var result = +year;

  if (year == null || isNaN(result)|| year<=0) {
    console.log(`Invalid data: ${year}`);
  } else {
    if (year % 100 === 0 || year % 400 === 0 || year % 4 === 0) {
      console.log(`This ${year} year is a leap year`);
    } else {
      console.log(`This ${year} year is not a leap year`);
    }
  }
}


            

leapYear(2020)
leapYear(1999)
leapYear(1600)
leapYear(2022)
leapYear(1945)
leapYear(1750)
leapYear(NaN)
leapYear(null)
leapYear('Twenty Twenty')
leapYear(undefined)
leapYear(-2)
leapYear(0)
    

