let timeLeft = 60;
let timer;
let running = false;

function updateDisplay(){
    document.getElementById("timer").innerText = timeLeft;
}

function startTimer(){

    if(running) return;

    running = true;

    timer = setInterval(() => {

        if(timeLeft > 0){

            timeLeft--;
            updateDisplay();

        } else {

            clearInterval(timer);
            document.getElementById("timer").innerText = "DONE 🔥";
            running = false;

        }

    },1000);
}

function stopTimer(){

    clearInterval(timer);
    running = false;

}

function resetTimer(){

    clearInterval(timer);
    running = false;
    timeLeft = 60;
    updateDisplay();

}