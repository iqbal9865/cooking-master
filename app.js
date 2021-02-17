const getMeal = () => {
    const searchInput = document.getElementById('input-field').value;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`)
        .then(res => res.json())
        .then(data => {
            document.getElementById('food-items').innerHTML = '';
            document.getElementById('food-details').innerHTML = '';
            const foodItem = document.getElementById('food-items');
            data.meals.forEach(item => {
                let ItemDiv = document.createElement('div');
                let Meals = ` <img src="${ item.strMealThumb }" onclick = "showIntegrate(${ item.idMeal })">
                        <h3 onclick = "showIntegrate(${ item.idMeal })"> ${item.strMeal} <h3> `;
                ItemDiv.className = 'card';
                ItemDiv.innerHTML = Meals;
                foodItem.appendChild(ItemDiv);
            });
           
        })
        .catch(error => {
            document.getElementById('food-items').innerHTML= '';
            document.getElementById('food-details').innerHTML = '';
            const foodItems = document.getElementById('food-items');
            const errorMessage = document.createElement('h2');
            errorMessage.innerHTML = 'SomeThing is Wrong! Please Try letter!';
            foodItems.appendChild(errorMessage);
        })
}
const showIntegrate = (mealId) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
    .then(res => res.json())
    .then(data => {
        document.getElementById('food-details').innerHTML = '';
        document.getElementById('food-details').style.display = 'block';
        const foodDetails = document.getElementById('food-details');
        const integrateDiv = document.createElement('div');
        const allIntegrates = `
            <img src="${data.meals[0].strMealThumb}">
            <h2>${data.meals[0].strMeal}</h2>
            <h2>${data.meals[0].strCategory}</h2>
            <h2>${data.meals[0].strArea}</h2>
            <ul>
                <li>${data.meals[0].strIngredient1} ${data.meals[0].strMeasure1}</li>
                <li>${data.meals[0].strIngredient2} ${data.meals[0].strMeasure2}</li>
                <li>${data.meals[0].strIngredient3} ${data.meals[0].strMeasure3}</li>
                <li>${data.meals[0].strIngredient4} ${data.meals[0].strMeasure4}</li>
                <li>${data.meals[0].strIngredient5} ${data.meals[0].strMeasure5}</li>
                <li>${data.meals[0].strIngredient6} ${data.meals[0].strMeasure6}</li>
                <li>${data.meals[0].strIngredient7} ${data.meals[0].strMeasure7}</li>
            </ul>
        `;
        integrateDiv.className = 'allInfo';
        integrateDiv.innerHTML = allIntegrates;
        foodDetails.appendChild(integrateDiv);
    })
}