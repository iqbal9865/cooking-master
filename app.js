const getMeal = () => {
    const searchInput = document.getElementById('input-field').value;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`)
        .then(res => res.json())
        .then(data => {
            document.getElementById('food-items').innerHTML = "";
            document.getElementById('food-details').innerHTML = "";
            const foodItem = document.getElementById('food-items');
            data.meals.forEach(item => {
                let ItemDiv = document.createElement('div');
                let Meals = ` <img src="${ item.strMealThumb }">
                        <h2> ${item.strMeal} <h2> `;
                ItemDiv.className = 'card';
                ItemDiv.innerHTML = Meals;
                foodItem.appendChild(ItemDiv);
            });
        })
}