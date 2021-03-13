import React, { useState } from 'react'
import PropTypes from 'prop-types';

const AddCategory = ({setCategories, categories})=> {
    const [inputValue, setInputValue] = useState('');

    const handleInputChage = (e)=>{
        setInputValue(e.target.value);
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();
        const newCategory = document.querySelector('input');
        if(newCategory.value.length>0 && !categories.find(valor => valor === newCategory.value)){
            await setCategories(myCategories =>[...myCategories, newCategory.value]);           
         }
         newCategory.value = ""
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChage}
            />
        </form>
    )
} 

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
    categories: PropTypes.array.isRequired
}

export default AddCategory
