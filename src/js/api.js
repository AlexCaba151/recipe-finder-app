const BASE_URL = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

export async function searchRecipes(query) {
  const response = await fetch(BASE_URL + query);
  const data = await response.json();
  return data.meals;
}