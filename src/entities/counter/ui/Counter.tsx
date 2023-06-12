import React from 'react';
import { Button } from 'shared/ui/Button/ui/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slice/counterSlice';

export const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);
    const increment = ():void => {
        dispatch(counterActions.increment());
    };

    const decrement = ():void => {
        dispatch(counterActions.decrement());
    };
    return (
        <div>
            <h1>
                {counterValue}
            </h1>
            <Button onClick={increment}>
                Increment
            </Button>
            <Button onClick={decrement}>
                Decrement
            </Button>
        </div>
    );
};
