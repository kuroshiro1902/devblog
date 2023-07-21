export default async function getCategories() {
  const response = await fetch('http://localhost:3400/categories');
  return response.json();
}
