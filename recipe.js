const apikey = '9041fdff59e7495ba9ae0d5607683c20'; 
const result = document.querySelector("#results");
const form = document.querySelector("form");

// Cleaning user input and then making request to the API
async function getRecipe(value) {
  result.innerHTML = `<h4>Loading...</h4>`;

  const valueArray = value.split(",");
  const trimmedArray = valueArray.map((ingredient) => ingredient.trim());
  const newValue = trimmedArray.join(",");

  const url = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${apikey}&ingredients=${newValue}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    result.innerHTML = `<h4 style="color:red;"> An error occurred. Please try again later. </h4>`;
    console.error('Error fetching data:', error);
  }
}

// Display API return value
function showRecipe(dataPromise) {
  dataPromise.then((data) => {
    if (data.length === 0) {
      result.innerHTML = `<h4 style="color:red;"> No match found in our database </h4>`;
      return;
    }

    let html = '<div class="card" style="width: 18rem;">';
    for (let i = 0; i < data.length; i++) {
      html += `
          <img class="card-img-top" src="${data[i]["image"]}" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">${data[i]["title"]}</h5>
          </div><br>`;
    }
    result.innerHTML = html += "</div>";
  });
}

// Check for form submission
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const search = document.getElementById("input").value.toLowerCase();
  const dataPromise = getRecipe(search);
  showRecipe(dataPromise);
});