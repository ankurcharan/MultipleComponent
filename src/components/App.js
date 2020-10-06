import React, {Component, useState} from "react";
import '../styles/App.css';
import Counter from './Counter';

const App = () => {

    const [count, setCount] = useState(0);

    const incrementCount = (e) => {
        e.preventDefault();
        setCount(count + 1);
    } 

    return(
        <>
            <h1 id='heading'>Counter</h1>
            <Counter count={count} handleCountChange={incrementCount} />
        </>
    )
}


export default App;
