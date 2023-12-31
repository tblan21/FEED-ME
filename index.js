

let sound = new Audio("https://www.freespecialeffects.co.uk/soundfx/explosions/explosion_11.wav");

let h2 = document.getElementById('clock');

let alarmSet = document.getElementById('alarm-set');

let alreadyFed = document.getElementById("already-fed");

let fed = document.getElementById('fedButton');

let reset = document.getElementById('resetButton')

let petName;

// set pet's name
function getPetName() {
    petName = document.getElementById('petName').value;
}

// display current time by the second
let currentTime = setInterval(function(){
    let date = new Date();
	
	let hours = date.getHours();

	let minutes = date.getMinutes();
	
	let seconds = date.getSeconds();
	
	let ampm = (date.getHours()) < 12 ? 'AM' : 'PM';
    

	//convert military time to standard time
    
	if (hours > 12) 
        hours = hours - 12;
    else 
        hours = hours;
    
	
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

function setButton() {
    // if no pet name, prompt user to enter name
    if (!petName)
        return alert( `Please enter your pet's name`);
    else 

    fed.innerHTML = `<button id='fed'>FED!</button>`;

    let hr = document.getElementById('alarmhrs');
	
	let min = document.getElementById('alarmmins');
	
	let sec = document.getElementById('alarmsecs');
	
	let ap = document.getElementById('ampm');
    
    
    let selectedHour = hr.options[hr.selectedIndex].value;
    let selectedMin = min.options[min.selectedIndex].value;
    let selectedSec = sec.options[sec.selectedIndex].value;
    let selectedAP = ap.options[ap.selectedIndex].value;

    let alarmTime = addZero(selectedHour) + ":" + addZero(selectedMin) + ":" + addZero(selectedSec) + selectedAP;
    console.log('alarmTime:' + alarmTime);
    
    document.getElementById('alarmhrs').disabled = true;
	document.getElementById('alarmmins').disabled = true;
	document.getElementById('alarmsecs').disabled = true;
	document.getElementById('ampm').disabled = true;
    
    //when alarmtime is equal to currenttime then play a sound
	let h2 = document.getElementById('clock');
    
    
    // notification of alarm time
    const alarmCreated = document.createElement("p")
    const node = document.createTextNode("Reminder set to feed " + petName + " at " + alarmTime)
    alarmCreated.appendChild(node);
    const alarmSet = document.getElementById("alarm-set");
    alarmSet.appendChild(alarmCreated);
    
    // function to calcutate the current time 
    // then compare it to the alarmtime and play a sound when they are equal
   setInterval(function(){
       
       let date = new Date();
       
       let hours = date.getHours();
       
       let minutes = date.getMinutes();
       
       let seconds = date.getSeconds();
       
       let ampm = (date.getHours()) < 12 ? 'AM' : 'PM';
       
       
       //convert military time to standard time
       
       if (hours > 12) 
        hours = hours - 12;
        else 
        hours = hours;
        
        let currentTime = h2.textContent = addZero(hours) + ":" + addZero(minutes) + ":" + addZero(seconds) + "" + ampm;
        
        
        if (alarmTime == currentTime) {
            sound.play();
		}    
    },1000);
    
};

function fedButton() {
    const fedReminder = document.createElement("p")
    const node = document.createTextNode(petName + ` has been fed today! Click Reset to set tomorrow's alarm.`)        
    fedReminder.appendChild(node);
    alreadyFed.appendChild(fedReminder);
    fed.innerHTML = '';
    alarmSet.innerText = '';
    reset.innerHTML = `<button id='reset'>Reset Alarm</button>`;
};

function resetButton(){
    setButton();
    reset.innerHTML = '';
    alarmSet.innerText = ' ';
    alreadyFed.innerText = ' ';
};

function clearButton(){
    reset.innerHTML = '';
    fed.innerHTML = '';
    alarmSet.innerText = ' ';
    alreadyFed.innerText = ' ';
    document.getElementById('alarmhrs').disabled = false;
    document.getElementById('alarmmins').disabled = false;
    document.getElementById('alarmsecs').disabled = false;
    document.getElementById('ampm').disabled = false;
};