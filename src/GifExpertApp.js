//import { Fragment } from "react"
import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export const GifExpertApp = () => { //desestructuracion de props

    const [categories, setCategories] = useState( ['Demon Slayer'] );

    //const categories = ['Dragon Ball', 'Kimetsu no Yaiba', 'Attack on Titan'];
    

    // const handleAdd = () => {
    //     return setCategories( [...categories, 'One Punch']);
    // }

    return (
        <> 
            <h2>Gif Expert App</h2>
            <hr />
            <AddCategory setCategories={ setCategories }/>
            {/* <button onClick = { handleAdd }>Agregar</button>  */}


            <ol>
                {
                    categories.map( category => (
                        <GifGrid 
                            category={ category } 
                            key={category}
                        />
                    ))
                }
            </ol>

        </>
    ); 

}
 
