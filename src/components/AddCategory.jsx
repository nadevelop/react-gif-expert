import { useState } from "react";


export const AddCategory = ({onNewCategory}) => {

  const [inputValue, setInputValue] = useState('');
  const onInputChange = (event)=>{
    console.log(event.target.value);
    setInputValue(event.target.value);
    //tambien se puede asi:
    //setInputValue(target.value);
  }  

  const onSubmit = (event) =>{
    event.preventDefault();

    if (inputValue.trim().length<=1) return;
    //setCategories 8....
    onNewCategory(inputValue.trim());
    setInputValue('');
  };
  return (
    <form onSubmit={(event)=> onSubmit(event)}>
      <input
          type="text"
          placeholder="Buscar gifs"
          value={inputValue}
          //onChange={(event)=>onInputChange(event)}
          onChange={onInputChange}
      />
    </form>
  )
}
