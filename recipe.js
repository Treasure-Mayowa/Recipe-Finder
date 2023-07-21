// const website = "https://spoonacular.com/food-api/docs#Search-Recipes-by-Ingredients"

const apikey = API_KEY
const recipe = document.querySelector("#Recipe")
const form = document.querySelector("form")
const search =  document.getElementById("input")
const ingredients = ""

const getRecipe = async (ingredient) => {
    recipe.innerHTML = `<h2> Loading... <h2>`
    const url = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${apikey}&ingredients=${ingredients}`
    const response = await fetch(url);
    const data = await response.json()
    return showRecipe(data)
}

const showRecipe = (data) => {
    if (data.cod == "404") {
        weather.innerHTML = `<h2>Recipe does not exist in our database<h2>`
        return;
    }
    weather.innerHTML = `
        <div>
            <img src="${data.image}" alt="">
        </div>
        <div>
            <h2>${data.title}</h2>
            <h4> ${data.weather[0].main} </h4>
        </div>
    `
}

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