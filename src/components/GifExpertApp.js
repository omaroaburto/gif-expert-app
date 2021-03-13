import React, {useState} from 'react'
import AddCategory from './AddCategory';

const GifExpertApp = () => {
    const [categories, setCategories] = useState([
        'pokemon', 
        'dark souls', 
        'zelda'
    ]);
    /*
    const handleAdd = async()=>{
        const newCategory = document.querySelector('input'); 
        if(newCategory.value.length>0 && !categories.find(valor => valor === newCategory.value)){
           await setCategories(myCategories =>[...myCategories, newCategory.value]);           
        }
        newCategory.value = ""
    }*/
    return (
        <>
          <h1>GifExpertApp</h1>
          <hr/>
          <AddCategory setCategories = {setCategories} categories = {categories}/>
           
          <ul>
            {categories.map(category=>{
                return <li key={category}>{category}</li>
            })}
          </ul>  
        </>
    )
}

export default GifExpertApp
