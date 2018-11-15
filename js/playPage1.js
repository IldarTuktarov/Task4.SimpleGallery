playButton.onclick = function () {
    play(pagesUrl[1]);
}

stopButton.addEventListener("click", function () {
    stop();
});

//previousButton.addEventListener("click", function () { redirect(url[3]); });

nextButton.addEventListener("click", function () { redirect(pagesUrl[1]); });
