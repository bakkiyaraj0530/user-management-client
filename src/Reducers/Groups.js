import { FETCH_GROUPS, SEARCH_GROUP } from './../Constants';

export default (state = [], action) => {
    switch (action.type) {
        case FETCH_GROUPS:
            return action.payload.data || null;
        case SEARCH_GROUP:
            return action.payload.data || null;
        default:
            return state;
    }
};