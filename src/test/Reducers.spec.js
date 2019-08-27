import reducer from './../Reducers';
import { ADD_USER, ADD_GROUP, FETCH_USERS, DELETE_USER, UPDATE_USER, SEARCH_GROUP } from './../Constants';

describe('Users post / update / Delete reducer Handle', () => {
    const expectedState = {"dashboard": null, "group": null, "groups": [], "groupupdates": null, "leftbar": true, "usermodal": null, "users":  [], "userupdates": null};
    it('should return the initial state', () => {
      expect(reducer(undefined, {})).toEqual(expectedState);
    });
    it('should handle ADD_USER', () => {
        const startAction = {
            type: ADD_USER,
            payload: {
                fullname: 'Fullname',
                email: 'email@email.com',
                group: '123234234'
            }
        }
        
        const expectedRes = {
            "dashboard": null, 
            "group": null, 
            "groups": [], 
            "groupupdates": null, 
            "leftbar": true, 
            "usermodal": null, 
            "users": [], 
            "userupdates": {"email": "email@email.com", "fullname": "Fullname", "group": "123234234"}
        }
        // it's empty on purpose because it's just starting to fetch posts
        expect(reducer({}, startAction)).toEqual(expectedRes);
      });
      it('should handle ADD_GROUP', () => {
        const startAction = {
            type: ADD_GROUP,
            payload: {
                groupName: 'GroupName',
            }
        }
        
        const expectedRes = {
            "dashboard": null, 
            "group": null, 
            "groups": [], 
            "groupupdates": {"groupName": "GroupName"}, 
            "leftbar": true, 
            "usermodal": null, 
            "users": [], 
            "userupdates":null,
        }
        // it's empty on purpose because it's just starting to fetch posts
        expect(reducer({}, startAction)).toEqual(expectedRes);
      });

      it('should handle DELETE_USER', () => {
        const startAction = {
            type: DELETE_USER,
            payload: {
                userid: 1212
            }
        }
        
        const expectedRes = {
            "dashboard": null, 
            "group": null, 
            "groups": [], 
            "groupupdates": null, 
            "leftbar": true, 
            "usermodal": null, 
            "users": [], 
            "userupdates": {
                "userid" : 1212
            },
        }
        // it's empty on purpose because it's just starting to fetch posts
        expect(reducer({}, startAction)).toEqual(expectedRes);
      });


      it('should handle UPDATE_USER', () => {
        const startAction = {
            type: UPDATE_USER,
            payload:  {
                fullname: 'Updated name',
                email: 'email@email.com',
                group: '123234234'
            }
        }
        
        const expectedRes = {
            "dashboard": null, 
            "group": null, 
            "groups": [], 
            "groupupdates": null, 
            "leftbar": true, 
            "usermodal": null, 
            "users": [], 
            "userupdates": {"email": "email@email.com", "fullname": "Updated name", "group": "123234234"}
        }
        // it's empty on purpose because it's just starting to fetch posts
        expect(reducer({}, startAction)).toEqual(expectedRes);
      });
      
      it('Handle FETCH_USERS Reducer', () => {
        const startAction = {
            type: FETCH_USERS,
            payload: {
                data: 'all'
            } 
        }
        
        const expectedRes = {
            "dashboard": null, 
            "group": null, 
            "groups": [], 
            "groupupdates": null, 
            "leftbar": true, 
            "usermodal": null, 
            "users": 'all', 
            "userupdates": null
        }
        expect(reducer({}, startAction)).toEqual(expectedRes);
    })
});

describe('Groups post / update / Delete / Search reducer Handle', () => {
    it('Handle SEARCH_GROUP Reducer', () => {
        const startAction = {
            type: SEARCH_GROUP,
            payload: {
                data: 'React',
            }
        }
        
        const expectedRes = {
            "dashboard": null, 
            "group": null, 
            "groups": "React", 
            "groupupdates": null, 
            "leftbar": true, 
            "usermodal": null, 
            "users": [], 
            "userupdates": null
        }
        expect(reducer({}, startAction)).toEqual(expectedRes);
    })
});