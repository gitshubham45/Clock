var secondHand = document.querySelector('.second');
var minuteHand = document.querySelector('.minute');
var hourHand = document.querySelector('.hour');


function setDate(){
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegree = ((seconds/60) * 360)-90;
    secondHand.style.transform = `rotate(${secondsDegree}deg)`;

    const minutes = now.getMinutes();
    const minutesDegree = (((minutes*60 + seconds)/3600) * 360)-90;
    minuteHand.style.transform = `rotate(${minutesDegree}deg)`;

    const hours = now.getHours();
    const hoursDegree = (((hours*60*60 + minutes*60 + seconds)/43000) * 360)-90;
    hourHand.style.transform = `rotate(${hoursDegree}deg)`;
}

setInterval(setDate,1000);

//360/12 -> 30 degree -> 1/2 degeree every minute -> 1/120 degree every second

//43000 second -> 360 degree -> 1 second -> 360/4300 -> minutes * 60 