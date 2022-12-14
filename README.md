# Nutrition App

By Joanna, Rebekah, and Saarah

Welcome to our Nutrition App! 

Features include:

- A Favorite recipe page that allows you to save recipes once you click on the "Favorite Recipe" button on either the Random Recipes Page and the Diet Form Page. Your favorite recipes are also saved to Firebase/Firestore and their attributes (such as summary, title and url) are shown on the Favorite Recipes page.
- Google Auth that allows users to sign into their account in order to save their favorite recipes.
- Code that displays a user's avatar next to their name once logged in.
- API calls from four different endpoints from the Spoonacular API, which can be found here:
   - Random Recipe Page:    
Random Recipe Endpoint: https://spoonacular.com/food-api/docs#Get-Random-Recipes
Nutrition Label Endpoint: https://spoonacular.com/food-api/docs#Recipe-Nutrition-Label-Image
These endpoints help to display three random recipes and their corresponding nutrition label by extracting recipe id and using it in the nutrition label URL that is used to fetch data from the API.
   - Diet Form Page:    
Complex Search Endpoint: https://spoonacular.com/food-api/docs#Search-Recipes-Complex
Recipe Information Endpoint: https://spoonacular.com/food-api/docs#Get-Recipe-Information
These endpoints help to get recipes based on what the user inputs in the text search and numeric inputs below the textbox. The complex search endpoint returns a recipe id, which is then used in the recipe information endpoint to extract more information about the recipe that wasn't returned from call to the API using the complex search endpoint.

You can find our presentation deck here: https://docs.google.com/presentation/d/1OKjHDvR-IH1Q4rMyJoUp8y1dKcgn9KJwZ-iRQirqpaI/edit?usp=sharing