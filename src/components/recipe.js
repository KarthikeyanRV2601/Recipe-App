import React from 'react';
import style from '../css/recipe.module.css';


const Recipe=({Title,Calories,ImageSrc,Ingredients})=>{
    return(
        <div className={style.Recipe}>
            <h1>{Title}</h1>
            <div className={style.Container}>
            <ol>
                {
                    Ingredients.map((ingredient)=>
                        <li key={Math.random()*1000}>{ingredient.text}</li>
                    )
                }
            </ol>
            <p><span>Calories:</span> {parseInt(Calories)} kcal</p>
            </div>
            <img 
            className="Image"
            src={ImageSrc} alt=""/>

        </div>

    );
}

export default Recipe;