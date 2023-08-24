import { useState } from "react";

function UseCount(){
    const [count,setCount]= useState(0)
    const increment = ()=>{
        setCount(count + 1)
    }
    const decrement = ()=>{
        setCount(count - 1)
    }
    const reset = ()=>{
        setCount(0)
    }
    return {
        count: count,
        onIncrement: increment,
        onDecrement: decrement,
        reset: reset
    }
}
export default UseCount