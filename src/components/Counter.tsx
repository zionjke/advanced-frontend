import React, {useState} from 'react';
import css from './Counter.module.scss'

type CounterType = {};

export const Counter = (props: CounterType) => {
    const [count, setCount] = useState<number>(0)

    return (
        <div>
            <button className={css.btn} onClick={() => setCount(prevState => prevState + 1)}>Increment</button>
            <button onClick={() => setCount(prevState => prevState - 1)}>Decrement</button>
            <p>{count}</p>
        </div>
    );
};
