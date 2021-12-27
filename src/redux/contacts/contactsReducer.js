import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {
    fetchContactsSuccess,
    deleteContactsSuccess,
    filterContact,
    addContactSuccess,
    fetchContactsRequest,
    fetchContactsError,
    addContactRequest,
    addContactError,
    deleteContactsRequest,
    deleteContactsError
} from './contactsAction';

const reducerItem = createReducer([], {
    [addContactSuccess]: (state, { payload }) => [...state, payload],
    [deleteContactsSuccess]: (state, { payload }) => state.filter(contact => contact.id !== payload),
    [fetchContactsSuccess]: (_, { payload }) => payload,
});

const reduceLoading = createReducer(false, {
    [fetchContactsRequest]: () => true,
    [fetchContactsSuccess]: () => false,
    [fetchContactsError]: () => false,

    [addContactRequest]: () => true,
    [addContactSuccess]: () => false,
    [addContactError]: () => false,

    [deleteContactsRequest]: () => true,
     [deleteContactsSuccess]: () => false,
     [deleteContactsError]: () => false,
});

const reducerFilter = createReducer('', {
    [filterContact]: (_, { payload }) => payload,
});

export const reducerContacts = combineReducers({
    items: reducerItem,
    filter: reducerFilter,
    loading: reduceLoading
});



//---------Redux Tool-------//
// const reducerItem = createReducer([], {
//   [addContact]: (state, { payload }) => [...state, payload],
//   [deleteContacts]: (state, { payload }) => state.filter(contact => contact.id !== payload),
//   [allContacts]: (_, { payload }) => payload,
// });

// const reducerFilter = createReducer('', {
//     [filterContact]: (_, { payload }) => payload,
//   });

// export const reducerContacts = combineReducers({
//   items: reducerItem,
//   filter: reducerFilter,
// });
///---------------Redux-----------////
// const reducerItem = (state = [], { type, payload }) => {
//     switch (type) {
//         case "add/contact":
//             return [...state, payload];

//         case 'delete/contact':
//             return state.filter(contact => contact.id !== payload);

//         case 'all/contact':
//             return payload;
//         default:
//             return state;

//     }
// }

// const reducerFilter = (state = "", { type, payload }) => {
//     switch (type) {
//         case "filter/contact":
//             return payload;
//         default:
//             return state;
//     }
// }

// export const  reducerContacts = combineReducers({
//     items : reducerItem,
//     filter: reducerFilter,
// });