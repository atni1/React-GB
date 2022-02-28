import { List } from '@mui/material';
import protoTypes from 'prop-types';
import { Chat } from './Chat';

export const ChatList = ({ list }) => {
  return (
    <List>
      {list.map((item) => (
        <Chat key={item.id} {...item}/>
      ))}
    </List>
  )
};

ChatList.protoTypes = {
  list: protoTypes.arrayOf(
    protoTypes.shape({
      id: protoTypes.string.isRequired,
      name: protoTypes.string
    })
  )
};