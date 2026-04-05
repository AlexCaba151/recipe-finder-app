import { searchRecipes } from "./api.js";
import { displayRecipes } from "./ui.js";

const btn = document.getElementById("searchBtn");
const input = document.getElementById("searchInput");

async function handleSearch() {
  const query = input.value;
  const recipes = await searchRecipes(query);
  displayRecipes(recipes);
}

// click
btn.addEventListener("click", handleSearch);

// enter
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    handleSearch();
  }
});