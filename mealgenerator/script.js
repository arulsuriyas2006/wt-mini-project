function generateMeal() {
    const meals = [
        "Grilled Chicken with Veggies",
        "Pasta with Pesto Sauce",
        "Sushi Platter",
        "Vegan Buddha Bowl",
        "BBQ Ribs with Cornbread"
    ];
    
    const randomMeal = meals[Math.floor(Math.random() * meals.length)];
    alert("Your suggested meal: " + randomMeal);
}
