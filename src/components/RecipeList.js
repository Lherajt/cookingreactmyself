import React from 'react'
import Recipe from './Recipe'


export default function RecipeList({ recipes, handleRecipeAdd, handleRecipeDelete }) {

    // First return for function
    return (


        <div
        className="recipe-list"
        >
            {recipes.map(recipe => {
                {/* Second return for rendering each Recipe, rendering more than once => need key */}
                return (


                    <Recipe
                        key={recipe.id}
                        {...recipe}
                        handleRecipeDelete={handleRecipeDelete}
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
