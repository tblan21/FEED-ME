

let sound = new Audio("https://www.freespecialeffects.co.uk/soundfx/explosions/explosion_11.wav");

let h2 = document.getElementById('clock');

// display current time by the second
let currentTime = setInterval(function(){
    let date = new Date();
	
	let hours = date.getHours();

	let minutes = date.getMinutes();
	
	let seconds = date.getSeconds();
	
	let ampm = (date.getHours()) < 12 ? 'AM' : 'PM';
    

	//convert military time to standard time
    
	if (hours < 0) {
        hours = hours * -1;
	} else if (hours == 0) {
        hours = 12;
	} else {
        hours = hours;
	}
    
	
	h2.textContent = addZero(hours) + ":" + addZero(minutes) + ":" + addZero(seconds) + "" + ampm;
	
},1000);


/*functions to get hour, min, secs, 
am or pm, add zero, set alarm time and sound, clear alarm
*/

function addZero(time) {
    
    return (time < 10) ? "0" + time : time;
	
}

function hoursMenu(){
    
    let select = document.getElementById('alarmhrs');
	let hrs = 12
    
	for (i=1; i <= hrs; i++) {
        select.options[select.options.length] = new Option( i < 10 ? "0" + i : i, i);
		
	}
}
hoursMenu();

function minMenu(){
    
    let select = document.getElementById('alarmmins');
	let min = 59;
    
	for (i=0; i <= min; i++) {
        select.options[select.options.length] = new Option(i < 10 ? "0" + i : i, i);
	}
}
minMenu();

function secMenu(){
    
    let select = document.getElementById('alarmsecs');
	let sec = 59;
    
	for (i=0; i <= sec; i++) {
        select.options[select.options.length] = new Option(i < 10 ? "0" + i : i, i);
	}
}
secMenu();

