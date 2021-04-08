// import {
//   EDIT,
//   DELETE,
//   ADD_ITEM,
//   SET_COUNTER,
//   SET_LIST,
//   INC,
//   DEC,
// } from './actionTypes';

import * as action from './actionTypes';

const initState = {
  counter: 0,
  counter1: 3000,
  counter2: 3000,
  goods: {},
  users: [],
  list: [],
};

export default function reducer(state = initState, { type, payload }) {
  switch (type) {
    case action.EDIT:
      const { id } = payload;
      return {
        ...state,
        list: state.list.map((el) => (el.id === id ? payload : el)),
      };
    case action.DELETE:
      return { ...state, list: state.list.filter((el) => el.id !== payload) };
    case action.ADD_ITEM:
      return {
        ...state,
        list: [...state.list, { id: Math.random(), label: payload }],
      };
    case action.SET_COUNTER:
      return { ...state, counter: payload };
    case action.SET_LIST:
      return { ...state, list: payload };
    case action.INC:
      return { ...state, counter: state.counter + 1 };
    case action.DEC:
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
}
