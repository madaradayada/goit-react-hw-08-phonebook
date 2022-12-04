import React from 'react';
import { useDispatch } from 'react-redux';

import { deleteContact } from 'redux/operations';

import { Item, Title, Button } from './ContactItemStyled';

export const ContactItem = ({contact}) => {
    const dispatch = useDispatch();
    const onDelete = () => {
      dispatch(deleteContact(contact.id));
    };
    return (
        <Item>
          <Title>
            {contact.name}: {contact.phone}
          </Title>
          <Button type="button" onClick={onDelete}>
            Delete
          </Button>
        </Item>
    );
  };