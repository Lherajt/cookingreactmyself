import React, { useContext } from 'react'
import IngredientsList from './IngredientsList'
import {RecipeContext} from './App'


export default function Recipe(props) {
    const {
        id,
        name,
        cookTime,
        servings,
        instructions,
        ingredients,
        // handleRecipeDelete
    } = props

// get values from context like this
    // const [handleRecipeDelete] = useContext(RecipeContext)

// Curly braces name of function declaration, useContext(nameOfContext)
    const {handleRecipeDelete, handleRecipeSelect} = useContext(RecipeContext)

    


    return (
        <div className="recipe">

            <span className="recipe-name">{name}</span>
            <div className="recipe-buttons">

                <button className="button edit-button"
                onClick={() => handleRecipeSelect(id)}
                
                >
                    Edit
                </button>
                <button
                className="button delete-button"
                // onclick={() => handleRecipeDelete(id)} => make sure onClick is capitalized
                onClick={() => handleRecipeDelete(id)}
                >
                    Delete
                </button>
            </div>


                <span>Cook Time: </span>
                <span>{cookTime}</span>


                <span>Servings: </span>
                <span>{servings}</span>


                <span>Instruction: </span>
                <span>{instructions}</span>

            <div>
                Ingredients:
            </div>
            <IngredientsList ingredients={ingredients} />

        </div>



    )
}
