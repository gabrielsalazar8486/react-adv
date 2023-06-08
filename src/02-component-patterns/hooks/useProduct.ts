import {useState} from "react";

export const useProduct = ()=>{
    const [counter, setCounter] = useState(0)

    const handleCount = (counter: number) => {
        setCounter(  prev => Math.max( prev + counter,0))
    }

    return {counter, handleCount}
}