const time = document.getElementById("time");
const format = document.getElementById("format");
const date = document.getElementById("date");

document.addEventListener("DOMContentLoaded",()=>{
    setInterval(updateDateTime,1000);
});

const updateDateTime = () =>{
    let today = new Date(); // gives today's date & time

    //Date display

    let dateOptions = {day :"numeric" ,month:"long" ,year:"numeric"};
    //en-US = month date year, en-GB = date month year
    let dateToday = today.toLocaleDateString('en-GB',dateOptions);
    date.textContent = `${dateToday}`;

    //Time display

    let hr = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();

    hr = hr<10 ? `0${hr}` : hr;
    min = min<10 ? `0${min}` : min;
    sec = sec<10 ? `0${sec}` : sec;

    // AM / PM 

    let ampm = hr >= 12 ? "PM" : "AM";

    // Convert to 12-hour format

    hr = hr % 12;
    hr = hr ? hr : 12;

    time.textContent = `${hr} : ${min} : ${sec}`;
    format.textContent = ampm;

};