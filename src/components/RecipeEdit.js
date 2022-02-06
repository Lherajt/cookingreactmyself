import React from 'react'

export default function RecipeEdit({recipe}) {
    const {
        id,
        name,
        cookTime,
        servings,
        // ingredients,
        instructions
    } = recipe
    return (
        <>
        {/* {console.log(`props object is: ${props}`)} */}
        {/* {console.log(`name object is: ${recipe.name}`)} */}
        {/* {console.log(`This is props[0]: ${props[0]}`)}

        {console.log(`These are the props.recipe: ${props.recipe}`)} */}
            <div className="recipe-edit">
                <h1>Edit Recipe</h1>
                <div className="recipe-edit__item">
                    <div>Name:</div>
                    <input
                    value={name}
                />
                </div>
                <div className="recipe-edit__item">
                    <div>Cook time:</div>
                    <input
                    value={cookTime}
                />
                </div>
                <div className="recipe-edit__item">
                    <div>Servings:</div>
                    <input
                    value={servings}
                />
                </div>
                <div className="recipe-edit__item">
                    <div>Instructions:</div>
                    <input
                    type=""
                    value={instructions}
                />
                </div>
                {/* {console.log(`RECIPE EDIT ${props[0].name}`)} */}
                
        
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
