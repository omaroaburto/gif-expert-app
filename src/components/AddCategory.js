import React, { useState } from 'react'
import PropTypes from 'prop-types';

const AddCategory = ({setCategories, categories})=> {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e)=>{
        setInputValue(e.target.value);
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();
        const newCategory = document.querySelector('input');
        if(newCategory.value.length>0 && !categories.find(valor => valor === newCategory.value)){
            await setCategories(myCategories =>[ newCategory.value, ...myCategories]);           
         }
         newCategory.value = ""
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Búsqueda"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    )
} 

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
    categories: PropTypes.array.isRequired
}

export default AddCategory
