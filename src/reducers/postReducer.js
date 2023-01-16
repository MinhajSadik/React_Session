import { ALL_POSTS_FAIL, ALL_POSTS_REQUEST, ALL_POSTS_SUCCESS } from "../types/postTypes"

const initialState = {
    products: [],
    loading: false,
    error: ""
}

export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ALL_POSTS_REQUEST:
            return {
                loading: true,
                products: []
            }
        case ALL_POSTS_SUCCESS:
            return {
                ...state,
                loading: false,
                products: action.payload
            }
        case ALL_POSTS_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}