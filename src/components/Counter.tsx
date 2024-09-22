import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../redux/store.ts";
import {decrement, increment} from "../redux/counterSlice.ts";

const Counter = () => {
    const dispatch:AppDispatch = useDispatch()
    const count = useSelector((state: RootState) => state.counter.count )
    return (
        <div>
            {count}
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
        </div>
    );
};

export default Counter;