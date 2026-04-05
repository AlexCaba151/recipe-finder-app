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

    container.appendChild(card);
  });
}