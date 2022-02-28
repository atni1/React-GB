import { ListItem, ListItemText } from '@mui/material';
import protoTypes from 'prop-types';

export const Chat = ({ name }) => {
  return (
    <ListItem>
      <ListItemText>{name}</ListItemText>
    </ListItem>
  )
}

Chat.protoTypes = {
  id: protoTypes.string,
  name: protoTypes.string,
}