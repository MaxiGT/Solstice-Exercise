import { createSelector } from 'reselect';

const getContacts = state => state.app.contacts;
const getFilter = state => state.app.filter;

export const getFavoriteContacts = createSelector(
  [getContacts],
  (contacts) => contacts.filter(c => c.isFavorite)
);

export const getOtherContacts = createSelector(
  [getContacts],
  (contacts) => contacts.filter(c => !c.isFavorite)
);

export const getFilteredFavoriteContacts = createSelector(
  [getFavoriteContacts, getFilter],
  (favContacts, filter) => {
    const a = favContacts.filter(c => c.name.toUpperCase().includes(filter.toUpperCase()));
    return a || favContacts;
  }
);

export const getFilteredOtherContacts = createSelector(
  [getOtherContacts, getFilter],
  (otherContacts, filter) => {
    const a = otherContacts.filter(c => c.name.toUpperCase().includes(filter.toUpperCase()));
    return a || otherContacts;
  }
);