document.addEventListener("DOMContentLoaded", () => {
    const recipeForm = document.getElementById("recipe-form");
    const ingredientsContainer = document.getElementById("ingredients-container");
    const preparationContainer = document.getElementById("preparation-container");
    const recipesContainer = document.getElementById("recipes-container");

    // Add a new ingredient field
    document.getElementById("add-ingredient-btn").addEventListener("click", () => {
        const ingredientItem = document.createElement("div");
        ingredientItem.classList.add("ingredient-item");
        ingredientItem.innerHTML = `
            <input type="text" class="ingredient" placeholder="Enter ingredient" required />
        `;
        ingredientsContainer.appendChild(ingredientItem);
    });

    // Add a new preparation step field
    document.getElementById("add-step-btn").addEventListener("click", () => {
        const preparationStep = document.createElement("div");
        preparationStep.classList.add("preparation-step");
        preparationStep.innerHTML = `
            <input type="text" class="preparation" placeholder="Enter preparation step" required />
        `;
        preparationContainer.appendChild(preparationStep);
    });

    // Handle recipe form submission
    recipeForm.addEventListener("submit", (e) => {
        e.preventDefault();

        // Collect recipe data
        const coverImageFile = document.getElementById("cover-image").files[0];
        const recipeName = document.getElementById("recipe-name").value;

        // Create recipe card
        const recipeCard = document.createElement("div");
        recipeCard.classList.add("recipe-card");

        // Add cover image
        if (coverImageFile) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const img = document.createElement("img");
                img.src = e.target.result;
                recipeCard.appendChild(img);
            };
            reader.readAsDataURL(coverImageFile);
        }

        // Add recipe name
        const title = document.createElement("h3");
        title.textContent = recipeName;
        recipeCard.appendChild(title);

        // Append the recipe card to the recipes container
        recipesContainer.appendChild(recipeCard);

        // Reset the form
        recipeForm.reset();
        ingredientsContainer.innerHTML = `<div class="ingredient-item"><input type="text" class="ingredient" placeholder="Enter ingredient" required /></div>`;
        preparationContainer.innerHTML = `<div class="preparation-step"><input type="text" class="preparation" placeholder="Enter preparation step" required /></div>`;
    });
});
