const button = document.querySelectorAll(".accordion-item");
document.querySelectorAll(".accordion-item").forEach((item) => {
    item.addEventListener('click', (event) => {
        // when click change text normal to bold
        item.querySelector(".accordion-button").classList.toggle("bold-text");
        // when click rotate arrow
        item.querySelector("#arrow").classList.toggle("transform-arrow");
        // give it height if it's open, else, remove
        let content = item.querySelector(".accordion-body");
        if (!item.classList.contains("open")) {
            item.classList.add("open");
            content.style.height = `${content.scrollHeight}px`;
        } else {
            item.classList.remove("open");
            content.style.height = "0px";
        }
    });
});











