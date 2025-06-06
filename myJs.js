const images = document.getElementById("images2");
const addition = document.getElementById("addition");
const click = document.getElementById("click_footer");
const mediaQuery = window.matchMedia('(min-width: 1120px)');
click.addEventListener("click", () => {
    console.log(mediaQuery.matches);
    if (addition.textContent === "Показать все") {
        images.style.display = "grid";
        if (mediaQuery.matches) {
            images.style.gridTemplateColumns = "repeat(4, 1fr)";
        }
        else{
            images.style.gridTemplateColumns = "repeat(3, 1fr)";
        }
        addition.textContent = "Скрыть";
    }
    else {
        images.style.display = "none";
        addition.textContent = "Показать все";
    }
});