import { HANDLE_MODAL } from './../Constants';

export default (state = null, action) => {
    switch (action.type) {
        case HANDLE_MODAL:
            return action.payload;
        default:
            return state;
    }
};