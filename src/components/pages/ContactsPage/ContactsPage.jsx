import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {ContactForm} from 'components/ContactForm/ContactForm';
import {Filter} from 'components/Filter/Filter';
import {ContactList} from 'components/ContactList/ContactList';

import { getContacts } from 'redux/selector';
import { getFilter } from 'redux/selector';
import { filterContacts } from 'redux/slice/filterSlice';
import { fetchContacts } from 'redux/operations';

import {
  ContactsPageWrapper,
  ContactsFormWrapper,
  ContactsListWrapper,
  PageTitle,
  ContactsTitle,
  LoaderText,
} from './ContactsPageStyled';

export const ContactsPage = () => {
  const { isLoading } = useSelector(getContacts);
  const contacts = useSelector(getContacts);

  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filterChange = evt => {
    const { value } = evt.currentTarget;
    dispatch(filterContacts(value));
  };

  const getFilters = () => {
    if (!filter) {
      return contacts;
    }
    const normalaizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) => {
      const normalaizedName = name.toLowerCase();
      const result = normalaizedName.includes(normalaizedFilter);
      return result;
    });
  };
  return (
    <ContactsPageWrapper>
      <ContactsFormWrapper>
        <PageTitle>New Contact</PageTitle>
        <ContactForm />
      </ContactsFormWrapper>

      <ContactsListWrapper>
        <ContactsTitle>Contacts</ContactsTitle>
        <Filter onChange={filterChange} value={filter} />
        {isLoading && <LoaderText>Waiting...</LoaderText>}

        <ContactList contacts={getFilters()}/>
      </ContactsListWrapper>
    </ContactsPageWrapper>
  );
};