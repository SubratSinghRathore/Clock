const currentTime = new Date();


document.getElementById('hours').innerHTML = `${currentTime.getHours()}`;
document.getElementById('minutes').innerHTML = `${currentTime.getMinutes()}`;
document.getElementById('seconds').innerHTML = `${currentTime.getSeconds()}`;
document.getElementById('date').innerHTML = `${currentTime.getDate()}`;
document.getElementById('year').innerHTML = `${currentTime.getFullYear()}`;


const month = currentTime.getMonth();
let stringMonth = '';
switch (month) {
    case 0:
        stringMonth = "January";
        break;
    case 1:
        stringMonth = "Febuary";
        break;
    case 2:
        stringMonth = "March";
        break;
    case 3:
        stringMonth = "April";
        break;
    case 4:
        stringMonth = "May";
        break;
    case 5:
        stringMonth = "June";
        break;
    case 6:
        stringMonth = "July";
        break;
    case 7:
        stringMonth = "August";
        break;
    case 8:
        stringMonth = "September";
        break;
    case 9:
        stringMonth = "October";
        break;
    case 10:
        stringMonth = "November";
        break;
    case 11:
        stringMonth = "December";
        break;
    default:
        stringMonth = "can not get month"
        break;
}
document.getElementById('month').innerHTML = stringMonth;

const day = currentTime.getDay();
let stringDay = '';
switch (day) {
    case 0:
        stringDay = "Sunday";
        break;
    case 1:
        stringDay = "Monday";
        break;
    case 2:
        stringDay = "Tuesday";
        break;
    case 3:
        stringDay = "Wednesday";
        break;
    case 4:
        stringDay = "Thursday";
        break;
    case 5:
        stringDay = "Friday";
        break;
    case 6:
        stringDay = "Saturday";
        break;
    default:
        stringDay = "can not get day";
        break;
}
document.getElementById('day').innerHTML = stringDay;


setInterval(() => {
    const currentTime = new Date();


    document.getElementById('hours').innerHTML = `${currentTime.getHours()}`;
    document.getElementById('minutes').innerHTML = `${currentTime.getMinutes()}`;
    document.getElementById('seconds').innerHTML = `${currentTime.getSeconds()}`;
    document.getElementById('date').innerHTML = `${currentTime.getDate()}`;
    document.getElementById('year').innerHTML = `${currentTime.getFullYear()}`;




    const month = currentTime.getMonth();
    let stringMonth = '';
    switch (month) {
        case 0:
            stringMonth = "January";
            break;
        case 1:
            stringMonth = "Febuary";
            break;
        case 2:
            stringMonth = "March";
            break;
        case 3:
            stringMonth = "April";
            break;
        case 4:
            stringMonth = "May";
            break;
        case 5:
            stringMonth = "June";
            break;
        case 6:
            stringMonth = "July";
            break;
        case 7:
            stringMonth = "August";
            break;
        case 8:
            stringMonth = "September";
            break;
        case 9:
            stringMonth = "October";
            break;
        case 10:
            stringMonth = "November";
            break;
        case 11:
            stringMonth = "December";
            break;
        default:
            stringMonth = "can not get month"
            break;
    }
    document.getElementById('month').innerHTML = stringMonth;

    const day = currentTime.getDay();
    let stringDay = '';
    switch (day) {
        case 0:
            stringDay = "Sunday";
            break;
        case 1:
            stringDay = "Monday";
            break;
        case 2:
            stringDay = "Tuesday";
            break;
        case 3:
            stringDay = "Wednesday";
            break;
        case 4:
            stringDay = "Thursday";
            break;
        case 5:
            stringDay = "Friday";
            break;
        case 6:
            stringDay = "Saturday";
            break;
        default:
            stringDay = "can not get day";
            break;
    }
    document.getElementById('day').innerHTML = stringDay;

}, 1000);


