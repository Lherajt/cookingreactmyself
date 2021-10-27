import React, { useState, useContext } from 'react'
import RecipeList from './RecipeList'
import { v4 as uuidv4 } from 'uuid';
import '../css/app.css'

let RecipeContext = React.createContext()





function App() {
  const [recipes, setRecipes] = useState(newRecipes)

  RecipeContext = {
    handleRecipeAdd,
    handleRecipeDelete
  }

  function handleRecipeAdd(){
    const newRecipe = {
      id: uuidv4(),
      name: 'Recipe Name 3',
      cookTime: '3:45',
      servings: '3',
      instructions: '1. get new bacon 2. Put new bacon on chicken 3. Eat chicken',
      ingredients: [
        {
          name: 'new bacon',
          amount: '2tbs'
        },
        {
          name: 'bacon',
          amount: '2lb'
        }
      ]
    }
    // Need to setRecipes as an array
    setRecipes([...recipes, newRecipe])
  }

  function handleRecipeDelete(id){
    setRecipes(recipes.filter(recipe => recipe.id !== id))
  }

  return (
    <>
      <div>
        <RecipeContext.Provider value={RecipeContext}>

          <RecipeList 
          // Not rendering more than once => doesn't need key
          recipes={recipes}
          handleRecipeAdd={handleRecipeAdd}
          handleRecipeDelete={handleRecipeDelete}
          // {...newRecipes}
          // key={newRecipes.id}

          />
        </RecipeContext.Provider>
        
      </div>
    </>
  );


}
const newRecipes = [
  {
    id: uuidv4(),
    name: 'Recipe Name',
    cookTime: '1:45',
    servings: '1',
    // instructions: "1. get chicken/n2. Put salt on chicken/n3. Eat chicken",
    instructions: "1. Put salt on chicken\n2. Put chicken in oven\n3. Eat chicken",
    ingredients: [
      {
        name: 'salt',
        amount: '1tbs'
      },
      {
        name: 'chicken',
        amount: '1lb'
      }
    ]
  },
  {
    id: uuidv4(),
    name: 'Recipe Name 2',
    cookTime: '2:45',
    servings: '2',
    instructions: '1. get bacon 2. Put salt on chicken 3. Eat chicken',
    ingredients: [
      {
        name: 'pepper',
        amount: '2tbs'
      },
      {
        name: 'bacon',
        amount: '2lb'
      }
    ]
  }
]


export default App;
