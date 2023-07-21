// const website = "https://spoonacular.com/food-api/docs#Search-Recipes-by-Ingredients"

const apikey = '9041fdff59e7495ba9ae0d5607683c20'
const result = document.querySelector("#results")
const form = document.querySelector("form")
const search =  document.getElementById("input").value


// Check for form submission
form.addEventListener(
    "submit",
    function(event) {
        getRecipe(search)
    }
)

function getRecipe(value){
    result.innerHTML = `<h2>Loading...</h2>`

    var valueArray = value.split(",");

    var trimmedArray = valueArray.map((ingredient) => ingredient.trim());

    const value = trimmedArray.join(",");

    

    result.innerHTML = `
    <img class="card-img-top" src="..." alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    `
}


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