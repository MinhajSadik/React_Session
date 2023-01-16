import api from "../api/api";
import { ALL_POSTS_FAIL, ALL_POSTS_REQUEST, ALL_POSTS_SUCCESS } from "../types/postTypes";

export const getPosts = () => async (dispatch) => {
    try {
        dispatch({ type: ALL_POSTS_REQUEST });

        const { data } = await api.getPosts()
        console.log({ data })

        dispatch({
            type: ALL_POSTS_SUCCESS,
            payload: data
        });

    } catch (error) {
        dispatch({
            type: ALL_POSTS_FAIL,
            payload: error.response.data.message,
        });
    }
};