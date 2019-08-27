// Get group data with group id
import { FETCH_GROUP } from './../Constants';

export const fetchGroup = (id) => async (dispatch, getState, api) => {
    const res = await api.post('/group/byid/' + id, null)
        .then(function (res) {
            return res;
        })
        .catch(function (err) {
            return err.response;
        });

    dispatch({
        type: FETCH_GROUP,
        payload: res.data
    });
};