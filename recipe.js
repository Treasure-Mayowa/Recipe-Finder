// const website = "https://spoonacular.com/food-api/docs#Search-Recipes-by-Ingredients"

const apikey = '9041fdff59e7495ba9ae0d5607683c20'
const result = document.querySelector("#results")
const form = document.querySelector("form")


// Cleaning user input and then making request to the API
 async function getRecipe(value){
    result.innerHTML = `<h4>Loading...</h4>`

    const valueArray = value.split(",")

    const trimmedArray = valueArray.map((ingredient) => ingredient.trim())

    const newValue = trimmedArray.join(",")

    const url = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${apikey}&ingredients=${newValue}`
    const response = await fetch(url)
    const data = await response.json()  
    return data  
}


// Display api return value
function showRecipe(data) {
  if (data.length === 0){
    result.innerHTML = `<h4 style="color:red;"> No match found in our database </h4>`
    return
  }

  for (let i = 0; i < data.length; i++){
      result.innerHTML += 
        `<div class="card" style="width: 18rem;">
          <img class="card-img-top" src="${data[i]["image"]}" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">${data[i]["title"]}</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            </div>`
  }
}

// Check for form submission
form.addEventListener("submit", function(event) {
        event.preventDefault();
        const search =  document.getElementById("input").value.toLowerCase()
        showRecipe(getRecipe(search))
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