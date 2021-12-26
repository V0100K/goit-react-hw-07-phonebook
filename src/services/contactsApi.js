import axios from 'axios';

axios.defaults.baseURL =
    'https://61c7adbb9031850017547497.mockapi.io/contacts/';

const getContacts = async () => {
    return await axios({
        method: 'get',
    });
};

const addContact = async contact => {
    return await axios({
        method: 'post',
        data: contact,
    });
};

const delContact = async id => {
    return await axios({
        method: 'delete',
        url: id,
    });
};

export { getContacts, addContact, delContact };