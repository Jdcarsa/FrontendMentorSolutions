const title = document.querySelectorAll('summary');

title.forEach(function (title) {
    title.addEventListener("click", () => {
        if (title.classList.contains('open')) {
            title.classList.remove("open");
            title.classList.remove("rotate");
        } else {
            title.classList.add("open");
            title.classList.add("rotate");
        }
    })
})