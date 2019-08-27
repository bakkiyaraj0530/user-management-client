// import moxios from 'moxios';
import { addUser, addGroup } from './../Actions/Create';
import { fetchGroup } from './../Actions/Detail';
import { handleLeft, handleModal, contentStats } from './../Actions/Global';
import { fetchUsers, searchUser, fetchGroupUsers, fetchGroups, searchGroup } from './../Actions/List';
import { deleteGroup, deleteUser, updateGroup, updateUser } from './../Actions/Update';


// import { addUser , addGroup } from './../Actions/Global';
// import { addUser , addGroup } from './../Actions/List';
// import { addUser , addGroup } from './../Actions/Update';
import { ADD_GROUP, FETCH_GROUP, FETCH_GROUPS, ADD_USER, CONTENT_STATS, FETCH_USERS, SEARCH_USER, SEARCH_GROUP,
    UPDATE_USER, DELETE_GROUP, UPDATE_GROUP, DELETE_USER, API_BASE_URL } from './../Constants';

import configureMockStore from 'redux-mock-store';
import nock from 'nock';
import 'isomorphic-fetch';
import thunk from 'redux-thunk';

describe('--- Actions Test Cases ---', () => {
    describe('Async actions', () => {

    const createStore = configureMockStore([thunk]);
    const store = createStore();

    // beforeEach(() => {
    //     moxios.install();
    // });

    afterEach(() => {
        // moxios.uninstall();
        nock.cleanAll()
    });

    it('Fetch Group action', () => {
        const requstP = { id: '2323' };
        nock(API_BASE_URL)
            .post('/api/group/byid/', requstP)
            .reply(201, { id: '123ACH' })

        const expectedActions = [{
            type: FETCH_GROUP,
            payload: requstP,
        }]

        store.dispatch(fetchGroup())
            .then(() => expect(store.getActions()).toEqual(expectedActions))
    })

    it('creates Add Group action', () => {
        nock(API_BASE_URL)
            .post('/api/group/add', { title: 'fffff' })
            .reply(201, { id: '123ACH' })

        const expectedActions = [{
            type: ADD_GROUP,
            payload: { title: 'fffff' },
        }]

        store.dispatch(addGroup())
            .then(() => expect(store.getActions()).toEqual(expectedActions))
    })

    it('creates Content Stats action', () => {
        nock(API_BASE_URL)
            .post('/api/stats/content', null)
            .reply(201, { id: '123ACH' })

        const expectedActions = [{
            type: CONTENT_STATS,
            payload: null,
        }]

        store.dispatch(contentStats())
            .then(() => expect(store.getActions()).toEqual(expectedActions))
    })

    it('creates Add User action', () => {
        nock(API_BASE_URL)
            .post('/api/user/add', { fullname: 'Bakkiyaraj', email: 'bakkiya@gmail.om', group: '23432424324' })
            .reply(201, { id: '123ACH' })

        const expectedActions = [{
            type: ADD_USER,
            payload: { fullname: 'Bakkiyaraj', email: 'bakkiya@gmail.om', group: '23432424324' },
        }]

        store.dispatch(addUser())
            .then(() => expect(store.getActions()).toEqual(expectedActions))
    })
    

    it('Should Handle left Actions been called', () => {  
        const payload = [{ "payload": "tests", "type": "HANDLE_LEFT" }];
        store.dispatch(handleLeft('tests'))
            .then(() => expect(store.getActions()).toEqual(payload));
    })
    it('Should Handle modal Actions been called', () => {
        const payloads = [{ "payload": "testqw", "type": "HANDLE_MODAL" }];
        store.dispatch(handleModal('testqw'))
            .then(() => expect(store.getActions()).toEqual(payloads));
    })

    it('searchUser Users action', () => {
        
        const term = 'bakkiyaraj';

        nock(API_BASE_URL)
            .post('/api/user/search/'+term, '222222' )
            .reply(201, { id: '123ACH' })

        const expectedActions = [{
            type: SEARCH_USER,
            payload: '222222',
        }]

        store.dispatch(searchUser())
            .then(() => expect(store.getActions()).toEqual(expectedActions))
    })

    
    it('Fetch All Users action', () => {
        const skip = 0;
        const limit = 24;
        const usersData = {
            skip,
            limit
        };
        nock(API_BASE_URL)
            .post('/api/user/all', usersData )
            .reply(201, { id: '123ACH' })

        const expectedActions = [{
            type: FETCH_USERS,
            payload: usersData,
        }]

        store.dispatch(fetchUsers())
            .then(() => expect(store.getActions()).toEqual(expectedActions))
    })

    
    it('Fetch All Users action', () => {
        nock(API_BASE_URL)
            .post('/api/user/bygroup/1', null )
            .reply(201, { id: '123ACH' })

        const expectedActions = [{
            type: FETCH_USERS,
            payload: null,
        }]

        store.dispatch(fetchGroupUsers())
            .then(() => expect(store.getActions()).toEqual(expectedActions))
    })
    it('Fetch All Groups action', () => {
        nock(API_BASE_URL)
            .post('/api/group/all', null )
            .reply(201, { id: '123ACH' })

        const expectedActions = [{
            type: FETCH_GROUPS,
            payload: null,
        }]

        store.dispatch(fetchGroups())
            .then(() => expect(store.getActions()).toEqual(expectedActions))
    })

    it('Search Groups Action', () => {
        nock(API_BASE_URL)
            .post('/api/group/search/react', null )
            .reply(201, { id: '123ACH' })

        const expectedActions = [{
            type: SEARCH_GROUP,
            payload: null,
        }]

        store.dispatch(searchGroup())
            .then(() => expect(store.getActions()).toEqual(expectedActions))
    })

    it('Delete Group Action', () => {
        nock(API_BASE_URL)
            .delete('/api/group/1', null )
            .reply(201, { id: '123ACH' })

        const expectedActions = [{
            type: DELETE_GROUP,
            payload: null,
        }]

        store.dispatch(deleteGroup())
            .then(() => expect(store.getActions()).toEqual(expectedActions))
    })

    it('Delete User Action', () => {
        nock(API_BASE_URL)
            .delete('/api/user/1', null )
            .reply(201, { id: '123ACH' })

        const expectedActions = [{
            type: DELETE_USER,
            payload: null,
        }]

        store.dispatch(deleteUser())
            .then(() => expect(store.getActions()).toEqual(expectedActions))
    })

    it('Update Group Action', () => {
        nock(API_BASE_URL)
            .put('/api/group/1', 'New Group name' )
            .reply(201, { id: '123ACH' })

        const expectedActions = [{
            type: UPDATE_GROUP,
            payload: 'New Group name',
        }]

        store.dispatch(updateGroup())
            .then(() => expect(store.getActions()).toEqual(expectedActions))
    })

    it('Update User Action', () => {
        nock(API_BASE_URL)
            .put('/api/user/1', 'New Group name' )
            .reply(201, { id: '123ACH' })

        const expectedActions = [{
            type: UPDATE_USER,
            payload: 'New Group name',
        }]

        store.dispatch(updateUser())
            .then(() => expect(store.getActions()).toEqual(expectedActions));
    })
})
})
