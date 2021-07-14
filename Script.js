window.setInterval(function () {
    const date = new Date();
    const hours = document.getElementById('oneh');
    hours.style.transform = `rotate(${date.getHours() / 12 * 360}deg)`;
    const minutes = document.getElementById('onem');
    minutes.style.transform = `rotate(${date.getMinutes() / 60 * 360}deg)`;
    const seconds = document.getElementById('ones');
    seconds.style.transform = `rotate(${date.getSeconds() / 60 * 360}deg)`;
    window.setTimeout(arguments.callee,1000,targetDate);
}, 1000);


window.setInterval(function () {
    const date = new Date();
    var offset = date.getTimezoneOffset();
    var targetoffset = -9 *60;
    const hours = document.getElementById('twoh');
    hours.style.transform = `rotate(${date.getHours() +targetoffset / 12 * 360}deg)`;
    const minutes = document.getElementById('twom');
    minutes.style.transform = `rotate(${date.getMinutes() / 60 * 360}deg)`;
    const seconds = document.getElementById('twos');
    seconds.style.transform = `rotate(${date.getSeconds() / 60 * 360}deg)`;

}, 1000);
window.setInterval(function () {
    const date = new Date();
    
    const hours = document.getElementById('threeh');
    hours.style.transform = `rotate(${(date.getHours() +2.5) / 12 * 360}deg)`;
    const minutes = document.getElementById('threem');
    minutes.style.transform = `rotate(${(date.getMinutes() + 28)/ 60 * 360}deg)`;
    const seconds = document.getElementById('threes');
    seconds.style.transform = `rotate(${date.getSeconds() / 60 * 360}deg)`;

}, 1000);

window.setInterval(function () {
    const date = new Date();
    
    const hours = document.getElementById('fourh');
    hours.style.transform = `rotate(${(date.getHours() -7) / 12 * 360}deg)`;
    const minutes = document.getElementById('fourm');
    minutes.style.transform = `rotate(${date.getMinutes() / 60 * 360}deg)`;
    const seconds = document.getElementById('fours');
    seconds.style.transform = `rotate(${date.getSeconds() / 60 * 360}deg)`;

}, 1000);

window.setInterval(function () {
    const date = new Date();
    
    const hours = document.getElementById('fiveh');
    hours.style.transform = `rotate(${(date.getHours() -2) / 12 * 360}deg)`;
    const minutes = document.getElementById('fivem');
    minutes.style.transform = `rotate(${date.getMinutes() / 60 * 360}deg)`;
    const seconds = document.getElementById('fives');
    seconds.style.transform = `rotate(${date.getSeconds() / 60 * 360}deg)`;

}, 1000);