import axios from 'axios';
import {
    fetchContactsRequest,
    fetchContactsSuccess,
    fetchContactsError,
    addContactRequest,
    addContactSuccess,
    addContactError,
    deleteContactsRequest,
    deleteContactsSuccess,
    deleteContactsError,
} from './contactsAction';

axios.defaults.baseURL = 'https://61c7adbb9031850017547497.mockapi.io';

export const fetchContacts = () => dispatch => {
    dispatch(fetchContactsRequest());

    axios
        .get('/contacts')
        .then(({ data }) => dispatch(fetchContactsSuccess(data)))
        .catch(error => dispatch(fetchContactsError(error)));
};

export const addContact =
    ({ name, number }) =>
        dispatch => {
            dispatch(addContactRequest());

            axios
                .post('/contacts', {name, number})
                .then(({ data }) => dispatch(addContactSuccess(data)))
                .catch(error => dispatch(addContactError(error)));
        };

export const deleteContacts = id => dispatch => {
    dispatch(deleteContactsRequest());

    axios
        .delete(`/contacts/${id}`)
        .then(() => dispatch(deleteContactsSuccess(id)))
        .catch(error => dispatch(deleteContactsError(error)));
};
