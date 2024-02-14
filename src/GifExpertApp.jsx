
import { useState } from 'react';
import { AddCategory, GifGrid } from './components';




export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch']);
  
  const onAddCategory = (newCategory) =>{
    //Valorant

    if(categories.includes(newCategory))return;

    setCategories([...categories,newCategory]);
    //mismo de arriba pero usando callback
    //setCategories(cat => [...cat,'Valorant']);

  };

  return (
    <>
        
        <h1>
            Gif Expert App
        </h1>

        
        <AddCategory 
            //setCategories={setCategories}
            onNewCategory={onAddCategory}
            />

        
        <button onClick={onAddCategory}>Agregar</button>
  
        {
          categories.map(category => {
            return(
              <GifGrid key={category} category={category}/>
            )
        

          })}
        

            
    </>
  )
}
