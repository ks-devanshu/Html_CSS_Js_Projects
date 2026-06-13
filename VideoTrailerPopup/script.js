const watchNowButtonEl = document.getElementById("watch_now");
const mainContentEl = document.getElementById("main");
const trailerContentEl = document.getElementById("trailer");
const closeButtonEl = document.getElementById("close");

watchNowButtonEl.addEventListener("click", ()=> {
    mainContentEl.style.display = "none";
    trailerContentEl.style.display = "inline-flex";
    document.getElementById("video").currentTime = 0;
})

closeButtonEl.addEventListener("click", () => {
    trailerContentEl.style.display = "none";
    mainContentEl.style.display = "block";
})