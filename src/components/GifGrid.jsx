import { useEffect, useState } from "react";

import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { getGifs } from "../helpers/getGifs";

//1Postman!"#"


export const GifGrid = ({category}) => {

const{images,isLoading} = useFetchGifs(category);
console.log({isLoading});


    

    return (
        <>
            <h3>{category}</h3>
            {
                isLoading &&(<h2>Cargando...</h2>)
            }
            <div className="card-grid">
                
                {
                images.map((image)=>(
                    <GifItem 
                        key={image.id} 
                        //con esto puedo esparcir las propiedades
                        {...image} />
                        
                ))
                }
                           
               
            </div>
        
            
        </>
  )
}


