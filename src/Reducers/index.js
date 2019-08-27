import { combineReducers } from 'redux';
import users from './Users';
import userupdates from './UserUpdates';
import usermodal from './UserModal';
import groups from './Groups';
import group from './Group';
import groupupdates from './GroupUpdates';
import leftbar from './LeftBar';
import dashboard from './Dashboard';

export default combineReducers({
    users,
    userupdates,
    usermodal,
    groups,
    group,
    groupupdates,
    leftbar,
    dashboard
});