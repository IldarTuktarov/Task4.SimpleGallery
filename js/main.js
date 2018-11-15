var secNumber = 5,

    go = false,

    nextButton = document.getElementById("next-btn"),

    previousButton = document.getElementById("previous-btn"),

    playButton = document.getElementById("play-btn"),

    stopButton = document.getElementById("stop-btn"),

    timeLeft = document.getElementById("time-left"),

    startOverBtn = document.getElementById("start-over-btn"),

    closeBtn = document.getElementById("close-btn"),

    pagesUrl = ["page1.html", "page2.html", "page3.html", "page4.html"];

function redirect(url) {
    location.assign(url);
}

function setCountDown(adress) {
    if (!go) {
        return;
    }

    var a = "" + adress;

    if (a.match(/.+\.html/)) {
        url = "" + a;
    }

    secNumber--;

    timeLeft.innerText = secNumber + " seconds left to go to the next page.";

    if (secNumber <= 0) {
        redirect(url);
    }

    setTimeout(setCountDown, 1000);
}

function play(adress) {
    go = true;

    setCountDown(adress);
}

function stop() {
    go = false;
}









