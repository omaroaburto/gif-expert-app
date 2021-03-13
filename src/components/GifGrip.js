import React, {useState, useEffect} from 'react'
import { useFetchGif } from '../hooks/useFetchGif'; 
import { GifGripItem } from './GifGripItem';

export const GifGrip =  ({category}) => { 
    const {data:imagenes, loading} = useFetchGif(category); 
    
    return (
        <>
            <h3>{category.toUpperCase()}</h3> 
            {loading && <span>Loading...</span>}
            <div className="caja"> 
                {
                    imagenes.map(img =>{
                            return (
                                <GifGripItem key={Math.random()} img={img} />  
                            );
                    })
                }
            </div> 
        </>
    )
}
