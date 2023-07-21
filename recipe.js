// const website = "https://spoonacular.com/food-api/docs#Search-Recipes-by-Ingredients"

const apikey = '9041fdff59e7495ba9ae0d5607683c20'
const recipe = document.querySelector("#Recipe")
const form = document.querySelector("form")
const search =  document.getElementById("input")
const ingredients = ""


// Check for form submission
form.addEventListener(
    "submit",
    function(event) {
        getRecipe(search.value)
        event.preventDefault();
    }
)

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}