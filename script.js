const accordionButton = document.querySelectorAll(".accordion-button");


// querySelectorAll(აიღოს ყველა ელემენტი, რომელიც accordion-button - ის ქვეშ არის)
document.querySelectorAll(".accordion-button").forEach(item => {
    item.addEventListener('click', event => {
        item.classList.toggle("open");
        item.nextElementSibling.classList.toggle("collapse");
    });

});