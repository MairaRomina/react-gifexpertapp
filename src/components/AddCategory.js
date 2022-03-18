import React, {useState} from 'react';
import PropTypes from 'prop-types';


export const AddCategory = ( {setCategories} ) => {

    const [inputValue, setInputValue] = useState(''); // () undefined  //('') string vacio 

    const handleInputChange = (e) => {
        //console.log(e.target.value);
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {  //accion para cuando se toca el enter, muestre un cartel
        e.preventDefault();

        //console.log( 'submit Hecho!' );
        //setCategories( cats => [...cats, inputValue]); //de esta forma agrega elementos vacios a la lista y no deberia

        if ( inputValue.trim().length > 2 ) { 
            setCategories( cats => [ inputValue, ...cats ] );
            setInputValue('');
        }

    }

  return (
    <form onSubmit={ handleSubmit }>
        <input  
            type = "text"
            value = { inputValue }
            onChange = { handleInputChange }
        />
    </form>
  )
}

AddCategory.propTypes = { //aca lleva p minuscula
    setCategories: PropTypes.func.isRequired //p mayuscula
}
