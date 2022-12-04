import axios from "axios";

export const instanceContact = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',

});

export const getContacts = async () => {
    const { data } = await instanceContact.get('/contacts');
    return data;
};

export const addContacts = async data => {
        const { data: result } = await instanceContact.post('/contacts', data);
        return result; 
}
  
export const deleteContacts = async (id) => {
  const { data } = await instanceContact.delete(`/contacts/${id}`);
        return data;
}

export const registerNewUser = async (credentials) => {
  const newUser = { ...credentials };
  const { data } = await instanceContact.post(`/users/signup`, newUser);
        return data;
}

export const logInUser = async (credentials) => {
  const user = { ...credentials };
  const { data } = await instanceContact.post(`/users/login`, user);
        return data;
}

export const logOutUser = async () => { 
  const { data } = await instanceContact.post(`/users/logout`);
        return data;
}