import * as types from '../constants/actionTypes';
import * as selector from './selector';

const mockContacts = [
  {
    id: 0,
    name: 'Random Name 01',
    isFavorite: true,
    phone: {
      work: '555-555-555',
      home: '555-666-777',
    },
    address: {
      street: 'False Street 123',
      city: 'Chicago',
      state: 'IL',
      country: 'US',
    },
    emailAddress: 'random_email_address'
  },
  {
    id: 1,
    name: 'Random Name 02',
    isFavorite: false,
    phone: {
      work: '555-555-555',
      home: '555-666-777',
    },
    address: {
      street: 'False Street 123',
      city: 'Chicago',
      state: 'IL',
      country: 'US',
    },
    emailAddress: 'random_email_address'
  },
  {
    id: 2,
    name: 'Random Name 03',
    isFavorite: true,
    phone: {
      work: '555-555-555',
      home: '555-666-777',
    },
    address: {
      street: 'False Street 123',
      city: 'Chicago',
      state: 'IL',
      country: 'US',
    },
    emailAddress: 'random_email_address'
  },
  {
    id: 3,
    name: 'Random Name 04',
    isFavorite: false,
    phone: {
      work: '555-555-555',
      home: '555-666-777',
    },
    address: {
      street: 'False Street 123',
      city: 'Chicago',
      state: 'IL',
      country: 'US',
    },
    emailAddress: 'random_email_address'
  },
];

const mockState = {
  app: {
    contacts: mockContacts,
    selectedContac: mockContacts[2],
    filter: 'Random',
  }
};

describe('Cross App Selectors', () => {

  it('Should return the favorite contacts', () => {
    const expected = mockContacts.filter(c => c.isFavorite);
    expect(selector.getFavoriteContacts(mockState)).toEqual(expected);
  });

  it('Should return the non favorite contacts', () => {
    const expected = mockContacts.filter(c => !c.isFavorite);
    expect(selector.getOtherContacts(mockState)).toEqual(expected);
  });

  it('Should return the filtered favorite contacts', () => {
    const expected = mockContacts.filter(c => c.isFavorite && c.name.toUpperCase().includes(mockState.app.filter.toUpperCase()));
    expect(selector.getFilteredFavoriteContacts(mockState)).toEqual(expected);
  });

  it('Should return the filtered favorite contacts', () => {
    const expected = mockContacts.filter(c => !c.isFavorite && c.name.toUpperCase().includes(mockState.app.filter.toUpperCase()));
    expect(selector.getFilteredOtherContacts(mockState)).toEqual(expected);
  });

});