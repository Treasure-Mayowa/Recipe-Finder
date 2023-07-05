// const website ="https://spoonacular.com/food-api/docs#Search-Recipes-by-Ingredients"

const apikey = API_KEY
const recipe = document.querySelector("#Recipe")
const form = document.querySelector("form")
function submit() {
    var input = document.getElementById("input");
    var ingred = input.split(", ").trim()
    input.innerHTML = ""
}
const ingredients = ""

const getRecipe = async(ingredient) => {
    recipe.innerHTML = `<h2> Loading... <h2>`
    const url = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${apikey}&ingredients=${ingredients}`
    const response = await fetch(url);
    const data = await response.json()
    return showWeather(data)
}

const showWeather = (data) => {
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

form.addEventListener(
    "submit",
    function(event) {
        getWeather(search.value)
        event.preventDefault();
    }
)
