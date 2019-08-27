import { ADD_GROUP, DELETE_GROUP, UPDATE_GROUP } from './../Constants';

export default (state = null, action) => {
    switch (action.type) {
        case ADD_GROUP:
            return action.payload;
        case DELETE_GROUP:
            return action.payload;
        case UPDATE_GROUP:
            return action.payload;
        default:
            return state;
    }
};