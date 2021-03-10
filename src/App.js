import React,{useEffect,useState} from 'react';
import './css/App.css';
import Recipe from './components/recipe';
import foodImage from './media/FOOD.png';
const App=()=>{
    const My_Credentials={
        APP_ID:"26456f06",
        APP_KEY:"2c989ef7692fa3be686c07dbd49d25b9"
    }
    //States
    const [Recipes,setRecipes]=useState([]);    
    const [search,setSearch]=useState('');
    const [FinalTarget,setFinalTarget]=useState('');
    
    useEffect(()=>{
        getRecipes();
    },[FinalTarget]);

    const fixFinalTarget=()=>{
            setFinalTarget(search);
            setSearch('');
    }
    const getRecipes=async()=>{
        const response =await fetch(`https://api.edamam.com/search?q=${FinalTarget}&app_id=${My_Credentials.APP_ID}&app_key=${My_Credentials.APP_KEY}`);
        const data=await response.json();
        setRecipes(data.hits);
    }
    const UpdateSearch=(e)=>{
        setSearch(e.target.value);
    }
    return(
        <div className="App">
            <form 
            onSubmit={(e)=>{
                e.preventDefault();
                fixFinalTarget();
            }
            }
            className="Form">
                <input 
                onChange={
                    (e)=>{
                        UpdateSearch(e);
                    }}
                className="Form-bar" type="text" value={search} placeholder="Enter the food name"/>
                <button 
                    // onClick={(e)=>{
                    // e.preventDefault();
                    // getRecipes();
                    // }} 
                    className="Form-btn" 
                    type="submit">Search</button>
            </form>
            {
            !FinalTarget?(
            <img className="Illustro" src={foodImage}>

            </img>):null
            }
            <div className="Recipes">
            {
                Recipes.map(recipe=>(
                    <Recipe 
                    key={Math.random()*1000}
                    Title={recipe.recipe.label} 
                    Calories={recipe.recipe.calories}
                    ImageSrc={recipe.recipe.image}
                    Ingredients={recipe.recipe.ingredients}
                    />
                ))
            }
            </div>
        </div>

    )
}
export default App;