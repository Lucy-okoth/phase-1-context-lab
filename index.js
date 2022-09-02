
/* Your Code Here */
/* Your Code Here */
let createEmployeeRecord = (el) => {
    return {
        "firstName": el[0],
        "familyName": el[1],
        "title": el[2],
        "payPerHour": el[3],
        "timeInEvents": [],
        "timeOutEvents": []
    };
}

let createEmployeeRecords = (mainArray) => {
    let newArr = [];
    mainArray.forEach(element => {
        newArr.push(createEmployeeRecord(element));
    });
    return (newArr);
}

let createTimeInEvent = function (dateStmp) {
    let arr = dateStmp.split(" ");
    this.timeInEvents.push({
        "type": "TimeIn",
        "hour": parseInt(arr[1]),
        "date": `${arr[0]}`
    })
    return this;
}

let createTimeOutEvent = function (dateStmp) {
    let arr = dateStmp.split(" ");
    this.timeOutEvents.push({
        "type": "TimeOut",
        "hour": parseInt(arr[1]),
        "date": `${arr[0]}`
    })
    return this;
}

let hoursWorkedOnDate = function (dateStmp) {
    let timeIn;
    let timeOut;

    this.timeOutEvents.forEach((el) => {
        if (el.date === dateStmp && el.type === "TimeOut") {
            timeOut = parseInt(el.hour);
        }
    })

    this.timeInEvents.forEach((el) => {
        if (el.date === dateStmp && el.type === "TimeIn") {
            timeIn = parseInt(el.hour);
        }
    })
    let hrs = parseInt(timeOut - timeIn)
    return (hrs / 100);
}


let wagesEarnedOnDate = function (dateStmp) {
    return this.payPerHour * hoursWorkedOnDate.call(this, dateStmp)
}


function allWagesFor() {
    let total = 0;
    this.timeInEvents.forEach((i) => {
        total = total + (wagesEarnedOnDate.call(this, i.date))
    })
    return total;
}

function findEmployeeByFirstName(srcArray, frstName) {
    return srcArray.find((e) => e.firstName === frstName)
}

function calculatePayroll(arr) {
    let total = 0
    arr.forEach((indx) => {
        total = total + allWagesFor.call(indx)
    });
    return total-1200;
}
