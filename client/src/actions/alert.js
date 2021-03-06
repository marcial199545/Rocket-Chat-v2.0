import { SET_ALERT, REMOVE_ALERT } from "./types";
import uuid from "uuid";

export const setAlert = (msg, alertType, time = 5000) => dispatch => {
    const id = uuid.v4();
    const payload = {
        msg,
        alertType,
        id
    };
    dispatch({
        type: SET_ALERT,
        payload
    });
    setTimeout(() => {
        dispatch({ type: REMOVE_ALERT, payload: id });
    }, time);
};
