//Fetch all users
import { FETCH_USERS, MORE_USERS, SEARCH_USER, FETCH_GROUP_USERS, FETCH_GROUPS, SEARCH_GROUP } from './../Constants';

export const fetchUsers = (skip, limit) => async (dispatch, getState, api) => {
    const usersData = {
        skip,
        limit
    };
    const res = await api.post('/user/all', usersData)
        .then(function (res) {
            return res;
        })
        .catch(function (err) {
            return err.response;
        });

    dispatch({
        type: FETCH_USERS,
        payload: res.data
    });
};

//Fetcj more users
export const moreUsers = (skip, limit) => async (dispatch, getState, api) => {
    const usersData = {
        skip,
        limit
    };
    const res = await api.post('/user/all', usersData)
        .then(function (res) {
            return res;
        })
        .catch(function (err) {
            return err.response;
        });

    dispatch({
        type: MORE_USERS,
        payload: res.data
    });
};

//Search User
export const searchUser = (term, groupid) => async (dispatch, getState, api) => {
    const res = await api.post('/user/search/' + term, groupid? groupid : null)
        .then(function (res) {
            return res;
        })
        .catch(function (err) {
            return err.response;
        });

    dispatch({
        type: SEARCH_USER,
        payload: res.data
    });
};

// Get group users list with group id
export const fetchGroupUsers = (id) => async (dispatch, getState, api) => {
    const res = await api.post('/user/bygroup/' + id, null)
        .then(function (res) {
            return res;
        })
        .catch(function (err) {
            return err.response;
        });

    dispatch({
        type: FETCH_GROUP_USERS,
        payload: res.data
    });
};

//Fetch all groups
export const fetchGroups = () => async (dispatch, getState, api) => {
    const res = await api.post('/group/all', null)
        .then(function (res) {
            return res;
        })
        .catch(function (err) {
            return err.response;
        });

    dispatch({
        type: FETCH_GROUPS,
        payload: res.data
    });
};

//Search Group
export const searchGroup = (term) => async (dispatch, getState, api) => {
    const res = await api.post('/group/search/' + term, null)
        .then(function (res) {
            return res;
        })
        .catch(function (err) {
            return err.response;
        });

    dispatch({
        type: SEARCH_GROUP,
        payload: res.data
    });
};