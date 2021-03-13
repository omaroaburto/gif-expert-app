import React, {useState} from 'react'
import AddCategory from './AddCategory';
import { GifGrip } from './GifGrip';

const GifExpertApp = () => {
    const [categories, setCategories] = useState([
        'gatos' 
    ]);

    return (
        <>
          <h1>GifExpertApp</h1>
          <AddCategory setCategories = {setCategories} categories = {categories}/>
          <hr/> 
          <ul>
            {categories.map(category=>{
                return (<GifGrip 
                    category={category}
                    key={category}
                />);
            })}
          </ul>  
        </>
    )
}

export default GifExpertApp
