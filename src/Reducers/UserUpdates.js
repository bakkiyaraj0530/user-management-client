import { ADD_USER, DELETE_USER, UPDATE_USER } from './../Constants';

export default (state = null, action) => {
    switch (action.type) {
        case ADD_USER:
            return action.payload;
        case DELETE_USER:
            return action.payload;
        case UPDATE_USER:
            return action.payload;
        default:
            return state;
    }
};