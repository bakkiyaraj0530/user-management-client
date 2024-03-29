import { CONTENT_STATS } from './../Constants';

export default (state = null, action) => {
    switch (action.type) {
        case CONTENT_STATS:
            return action.payload;
        default:
            return state;
    }
};