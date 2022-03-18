import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';


export const GifGrid = ( {category} ) => {

    const { data: images, loading } = useFetchGifs( category );

    //console.log( data );
    console.log( loading );

    // useEffect( () => { //tiene 2 argumentos //esto quiero que se ejecute cuando es renderizado por primera vez
    //     getGifs( category )
    //         .then( setImages );
    // }, [ category ] ) //arreglo de depencias//si lo dejo vacio, useEffect se dispara una unica vez


    return (
        <>
            <h3 className="animate__animated animate__bounce animate__fadeIn">{ category }</h3>

            {loading && <p className="animate__animated animate__bounce animate__flash"> Cargando...</p> }

            <div className='card-grid'>
                {
                    images.map(  img => (
                        <GifGridItem 
                            key={img.id}
                            { ...img }
                        />

                    ))
                }
                
            </div>
        </>
    )
}
