import {COUNTER } from "../types";

const CounterAction = (count) => async (dispatch) => {
    // console.log("actionData",count)
    dispatch({
        type: COUNTER,
        payload: count
    })
}
export {
    CounterAction,
};