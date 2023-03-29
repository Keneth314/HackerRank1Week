/*
    Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.
    Note:
    - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock. 
    - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock. 

    Input:
    07:05:45PM

    Output:
    19:05:45

*/

function timeConversion(s) {
    let hour = s.slice(0, 2)
    let rest = s.slice(2, -2)
    let timeSystem = s.slice(-2)
    
    if(hour < 12 && timeSystem == "PM"){
        hour = parseInt(hour) + 12
    }
    if(hour == 12 && timeSystem == "AM"){
        hour = "00"
    }
    
    return hour + rest
}

console.log(timeConversion("07:05:45PM")) // 19:05:45
console.log(timeConversion("06:40:03AM")) // 06:40:03
console.log(timeConversion("12:30:15AM")) // 00:30:15
console.log(timeConversion("12:10:08PM")) // 12:10:08

// Imagen de ayuda: https://wl-ideasen5minutos.cf.tsp.li/resize/728x/jpg/b96/249/257abf5326abc90e9333652ea4.jpg 