import { ListItem, ListItemText } from '@mui/material';
import protoTypes from 'prop-types';

export const Message = (props) => {
  return (
    <ListItem>
      <ListItemText>
        [{props.author}]: {props.text}
      </ListItemText>
    </ListItem>
  )
}

Message.protoTypes = {
  id: protoTypes.string,
  text: protoTypes.string,
  author: protoTypes.string,
}