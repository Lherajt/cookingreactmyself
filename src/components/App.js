// Only createContext, export the context and useContext(contextName) where getting things from it
import React, { useState, useEffect } from 'react'
import RecipeList from './RecipeList'
import { v4 as uuidv4 } from 'uuid';
import '../css/app.css'
import RecipeEdit from './RecipeEdit';

// let RecipeContext = React.createContext()
// NEED TO EXPORT CONTEXT!
export const RecipeContext = React.createContext()

const STORAGE_KEY = 'recipe.storageKey'



function App() {
  const [recipes, setRecipes] = useState(newRecipes)
  const [selectedRecipeId, setSelectedRecipeId] = useState()
  // Research difference in return value of find vs filter, only find works
  const selectedRecipe = recipes.find(recipe => recipe.id === selectedRecipeId)
  // const selectedRecipe = recipes.filter(recipe => recipe.id === selectedRecipeId)


  function handleRecipeSelect(id) {
    setSelectedRecipeId(id)
  }
  console.log(selectedRecipe)

  // useEffect(() => {
  //   const storedRecipes = localStorage.getItem(STORAGE_KEY, JSON.stringify(recipes))
  //   if storedRecipes !== null ? localStorage.setItem(STORAGE_KEY, storedRecipes)
  // }, [recipes])

  // useEffect(() => {
  //   localStorage.setItem(STORAGE_KEY, JSON.stringify(recipes));
  // }, [recipes]);


// first make variable for storedData and the if there is anything setRecipes(Json.parse(storedData))
  useEffect(() => {
    const recipeJSON = localStorage.getItem(STORAGE_KEY)
    if (recipeJSON != null) setRecipes(JSON.parse(recipeJSON))
    // run once
  }, [])

  // setItem(storage_name, set to JSON.stringify(what))
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(recipes))
    // run every time recipes changes
  }, [recipes])

  const RecipeContextValue = {
    handleRecipeAdd,
    handleRecipeDelete,
    handleRecipeSelect
  }

  function handleRecipeAdd(){
    // need to create the element to add
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
    // Need to setRecipes as an array, inside array we can set it to ...recipes and after change the added element
    setRecipes([...recipes, newRecipe])
  }

  // pass it the key id to know which recipe to filter out  
  function handleRecipeDelete(id){
    setRecipes(recipes.filter(recipe => recipe.id !== id))
  }

  return (
    <>
      <div>
        <RecipeContext.Provider value={RecipeContextValue}>

          <RecipeList 
          // Not rendering more than once => doesn't need key
          recipes={recipes}
          // handleRecipeAdd={handleRecipeAdd}
          // handleRecipeDelete={handleRecipeDelete}
          // {...newRecipes}
          // key={newRecipes.id}

          />

          {/* <RecipeEdit
            recipe={selectedRecipe}
          /> */}
          {selectedRecipe && <RecipeEdit recipe={selectedRecipe} />}
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
        id: uuidv4(),
        name: 'salt',
        amount: '1tbs'
      },
      {
        id: uuidv4(),
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
        id: uuidv4(),
        name: 'pepper',
        amount: '2tbs'
      },
      {
        id: uuidv4(),
        name: 'bacon',
        amount: '2lb'
      }
    ]
  }
]


export default App;
