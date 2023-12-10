import {React,useState} from 'react'

function InputElemText({onDataFromChildText }) {

    const [textInInput, reInput] = useState('')
    const handleInputChange = (e) => {
        const newValue = e.target.value;
        reInput(newValue)
        
        onDataFromChildText(newValue);
      };
    
    
    return (
  <textarea className="w-100 form-control mt-2" placeholder='Текст заметки'  onChange={handleInputChange} value={textInInput}></textarea>
    )
}

export default InputElemText