import { List } from '@mui/material';
import protoTypes from 'prop-types';
import { Message } from './Message';

export const MessageList = (props) => {
  return (
    <List>
      {props.messageList.map((item) => (
        <Message key={item.id} {...item}/>
      ))}
    </List>
  )
};

MessageList.protoTypes = {
  messageList: protoTypes.arrayOf(
    protoTypes.shape({
      id: protoTypes.string,
      text: protoTypes.string,
      author: protoTypes.string,
    })
  )
};

MessageList.defaultProps = {
  messageList: [],
}
