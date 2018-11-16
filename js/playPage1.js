play(pagesUrl[1]);

playButton.onclick = function () {
    play(pagesUrl[1]);
}

stopButton.addEventListener("click", function () {
    stop();
});

nextButton.addEventListener("click", function () { redirect(pagesUrl[1]); });
