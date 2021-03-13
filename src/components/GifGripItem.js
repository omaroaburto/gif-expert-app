import React from 'react'

export const GifGripItem = ({img}) => {
    return (
        <div key={img.id} className="item-caja">
            <img key={img.id} src={img.url} alt={img.titulo}/>   
        </div>  
    )
}
