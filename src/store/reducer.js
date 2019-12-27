import initialState from './initialState';
import * as types from '../constants/actionTypes';

export default (state = initialState, action) => {

  let selectedContact = '';
  let contacts = '';

  switch(action.type) {
    case types.GET_CONTACTS_REQUEST:
      return { ...state, fetching: true };
    case types.GET_CONTACTS_REQUEST_SUCCESS:
      return { ...state, contacts: action.payload, fetching: false };
    case types.GET_CONTACTS_REQUEST_ERROR:
      return { ...state, fetching: false, error: action.payload };
    case types.RAISE_ERROR:
      return { ...state, error: action.payload };
    case types.FILTER_CHANGE:
      return { ...state, filter: action.payload };
    case types.SELECT_CONTACT:
      return { ...state, selectedContact: action.payload };
    case types.TOGGLE_ISFAVORITE:
      contacts = state.contacts.map((c, idx) => {
        if (c.id !== action.payload) {
          return c;
        };
        return {
          ...c,
          isFavorite: !c.isFavorite,
        };
      });
      selectedContact = contacts.filter(c => c.id === action.payload)[0];
      return { ...state, contacts, selectedContact };
    case types.RECOVER_CONTACT:
      selectedContact = state.contacts.filter(c => c.id === action.payload)[0];
      return { ...state, selectedContact };
    default:
      return { ...state };
  }
};