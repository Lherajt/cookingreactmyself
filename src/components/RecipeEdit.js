import React from 'react'

export default function RecipeEdit({recipe}) {
    // const {
    //     id,
    //     name,
    //     cookTime,
    //     servings,
    //     // ingredients,
    //     instructions
    // } = recipe
    return (
        <>
        {/* {console.log(`props object is: ${props}`)} */}
        {/* {console.log(`name object is: ${recipe.name}`)} */}
        {/* {console.log(`This is props[0]: ${props[0]}`)}

        {console.log(`These are the props.recipe: ${props.recipe}`)} */}
            <div className="recipe-edit">
                <div>
                    Name:
                </div>
                {/* {console.log(`RECIPE EDIT ${props[0].name}`)} */}
                <div>
                    {recipe.name}
                </div>
                {/* <div>
                    {id}
                </div>
                <div>
                    {cookTime}
                </div>
                <div>
                    {servings}
                </div>
                <div>
                    {instructions}
                </div> */}
                {/* <div>
                    {ingredients}
                </div> */}
            </div>

        </>
    )
}
