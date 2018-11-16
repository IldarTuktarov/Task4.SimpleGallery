playButton.addEventListener("click", function () { play(pagesUrl[3]); });

stopButton.addEventListener("click", function () { stop(); });

nextButton.addEventListener("click", function () { redirect(pagesUrl[2]); });

previousButton.addEventListener("click", function () { redirect(pagesUrl[0]); });

play(pagesUrl[2]);



