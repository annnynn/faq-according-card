const button = document.querySelectorAll(".accordion-button");
document.querySelectorAll(".accordion-button").forEach((item) => {
    item.addEventListener('click', (event) => {
        // button-ს რომ დავაჭერ ტექსტი გახდეს bold
        item.classList.toggle("bold-text")
        // button-ს რომ დავაჭერ შეცვალოს arrow  
        item.nextElementSibling.classList.toggle("transform-arrow");
        // button -ს რომ დავაჭერ ჩამოიშალოს კონტენტი
        item.parentElement.parentElement.querySelector(".accordion-collapse").classList.toggle("show");
    })
});



 





