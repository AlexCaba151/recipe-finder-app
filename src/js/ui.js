export function displayRecipes(recipes) {
  const container = document.getElementById("recipesContainer");
  container.innerHTML = "";

  if (!recipes) {
    container.innerHTML = "<p>No recipes found</p>";
    return;
  }

  recipes.forEach(recipe => {
    const card = document.createElement("div");
    card.classList.add("recipe-card");

    card.innerHTML = `
      <img src="${recipe.strMealThumb}" />
      <h3>${recipe.strMeal}</h3>
    `;

    // 👉 CLICK EVENT
    card.addEventListener("click", () => {
      showRecipeDetails(recipe);
    });

    container.appendChild(card);
  });
}

function showRecipeDetails(recipe) {
  const modal = document.getElementById("recipeModal");
  const modalBody = document.getElementById("modalBody");

  modalBody.innerHTML = `
  <h2>${recipe.strMeal}</h2>

  <img src="${recipe.strMealThumb}" />

  <p><strong>Category:</strong> ${recipe.strCategory}</p>

  <p><strong>Instructions:</strong></p>
  <p>${recipe.strInstructions}</p>
`;

  modal.classList.remove("hidden");
}