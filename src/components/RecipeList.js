// Need to use context wherever I get values from it
import React, { useContext } from 'react'
import Recipe from './Recipe'
// Import context in curly braces!!!
import {RecipeContext} from './App'



export default function RecipeList({ recipes
    //  handleRecipeAdd,
    //   handleRecipeDelete
     }) {


    // Get values from context like this
    // const [handleRecipeAdd] = useContext(RecipeContext)
    // Curly braces name of function declaration, useContext(nameOfContext)
    const { handleRecipeAdd } = useContext(RecipeContext)




    // First return for function
    return (


        <div
        className="recipe-list"
        >
        {/* in this div map over all the recipes and for each return... */}
            {recipes.map(recipe => {
                {/* Second return for rendering each Recipe, rendering more than once => need key */}
                return (


                    <Recipe
                        key={recipe.id}
                        {...recipe}
                        // handleRecipeDelete={handleRecipeDelete}
                    />

                )
            })}
            <button
            className="button"
            onClick={() => handleRecipeAdd()}
            >
            Add Recipe
            </button>
        </div>
        


        // <>
        // <Recipe/>
        // <Recipe/>
        // </>

    )
}
