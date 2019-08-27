import React from 'react';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import jsdom from 'jsdom';
import 'jsdom-global/register';

const mockStore = configureMockStore();
const store = mockStore({});


import { shallow, mount } from 'enzyme';
import GroupsList from './../Components/GroupsList';
import Header from './../Components/Header';
import Input from './../Components/Input';
import UserModal from './../Components/UserModal';
import UsersList from './../Components/UsersList';

// const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
// global.document = doc;
// global.window = doc.defaultView;

// import { findByTestAtrr, testStore } from './../Utils';

// const setUp = (initialState = {}) => {
//     const store = testStore(initialState);
//     const wrapper = shallow(<GroupsList store={store} />).childAt(0).dive();
//     return wrapper;
// };

// import TestPage from "../TestPage";


describe("Group listing page Component", () => {
    let component;
    let component2;
    let component3;
    let component4;

    let propsCall;
    const groups = {
        created: "2019-08-20T12:54:11.367Z",
        title: "ReactDev2",
        v: 0,
        id: "5d5bed73aaebcf01d494798c"
    };
    beforeEach(() => {

        propsCall = { handleLeft: jest.fn() }
        component = shallow(
            <Provider store={store}>
                <GroupsList groups={groups} />
            </Provider>)
        component2 = shallow(
            <Provider store={store}>
                <Header propsCall={propsCall} />
            </Provider>)
    });

    it('renders correctly', () => {
        const wrapper = shallow(<Input />);
        expect(wrapper).toMatchSnapshot();
    });
    describe('when Header Icon clicks ', () => {

        it('matches Header snapshot', () => {
            const onIconClickMock = jest.fn();

            const wrapper = shallow(
                <Provider store={store}>
                    <Header handleLeft={onIconClickMock} />
                </Provider>
            );
            expect(component.exists()).toBe(true);

            // wrapper.find('fa fa-bars').simulate('click');
            // expect(onIconClickMock).toHaveBeenCalledTimes(1); 
            // expect(onIconClickMock).toHaveBeenCalledWith(true);
        })
    });
    it('handle inner Method', () => {
        expect(component2.find('header').length).toBe(0);
    });
    it('matches Gouplist snapshot', () => {
        expect(component).toMatchSnapshot()
    })

    it("should render without throwing an error", () => {
        expect(component.exists()).toBe(true);
    });

    it('changes state when typing', () => {
        //     // component.state
        component = shallow(
            <Provider store={store}>
                <GroupsList groups={groups} />
            </Provider>)
        // component.instance().handleUpdate = jest.fn();
        expect(component.find('input').length).toBe(0);

        // expect(component.find('input').length).toBe(1)
        // expect(component.find('button').length).toBe(1)
        // expect(component.find('button').first().hasClass('btn'))
        // expect(component.find('button').first().hasClass('btn-success'))
        //     // expect(component.state('text')).toBe('Hello');

        //     expect(component.state('text')).toBe('Hello');
    })
    // })

});

