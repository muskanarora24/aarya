import { createContext, useState } from "react";

export const Contextone = createContext(null);

export const CounterProvider = (props)=>{

    const[isLogged, setIsLogged] = useState(false);
    const[isArrow, setIsArrow] = useState(false);
    const[name,setName] = useState(false);
    const [isPremium, setisPremium] = useState(false);

    return(
        <Contextone.Provider value ={{isLogged, setIsLogged, isArrow, setIsArrow,name, setName, isPremium, setisPremium}}>
        {props.children}
        </Contextone.Provider>
    )
}