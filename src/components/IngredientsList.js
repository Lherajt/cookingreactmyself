import React from 'react'
import Ingredient from './Ingredient'

export default function IngredientsList({ ingredients }) {

    return (
        <div>
            {ingredients.map(ingredient => {
                return (
                    <Ingredient
                        {...ingredient}
                        key={ingredient.id}
                    />
                )
            })}
        </div>
    )





    // return (
    //     <div>
    //         {/* <Ingredient/> */}
    //         {ingredients.map(ingredient => {
    //             return (
    //                 <Ingredient 
    //                     key={ingredient.id}
    //                     {...ingredient}
    //                 />
    //             )
    //         })}
    //     </div>
    // )


}
