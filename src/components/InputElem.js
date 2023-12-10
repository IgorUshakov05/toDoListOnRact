import {React,useState} from 'react'

function InputElem({onDataFromChild }) {

    const [textInInput, reInput] = useState('')
    const handleInputChangeText = (e) => {
        const newValue = e.target.value;
        reInput(newValue)
        onDataFromChild(newValue);
      };
    
    
    return (
        <input type='text' value={textInInput} 
        onChange={handleInputChangeText}
        className='w-100 form-control mt-2'
        placeholder='Название'
        />
    )
}

export default InputElem