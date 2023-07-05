const apikey = API_KEY

function submit() {
    var input = document.getElementById("input");
    var ingred = input.split(", ").trim()
    input.innerHTML = ""
}
const ingredients = ""
const URL = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${apikey}&ingredients=4{ingredients}`