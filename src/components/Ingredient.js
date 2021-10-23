import React from 'react'

export default function Ingredient({ name, amount}) {
    return (
        <div className="ingredient-flex">
            <div>
                {name}
            </div>
            <div>
                {amount}
            </div>
            <button className="button ingredient-delete-button">
                &times;
            </button>
        </div>
    )
}
