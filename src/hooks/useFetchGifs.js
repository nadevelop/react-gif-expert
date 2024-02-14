import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading,setIsLoading] = useState(true);
    
     const getImages = async () =>{
         const newImages = await getGifs(category);
         setImages(newImages);
         setIsLoading(false);
     }

     //Al poner las dependencais vacias, interpreta solo ejecutar el compnente 1 sola vez
     useEffect (()=>{
       
         getImages();
      
     },[])

    return{
        //images:[],
        images,
        isLoading
    }
}
