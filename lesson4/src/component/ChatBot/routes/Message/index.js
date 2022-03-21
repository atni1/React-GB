// import { makeStyles } from '@material-ui/core/styles'
import { useState, useEffect } from 'react';
import { Redirect, useParams } from 'react-router-dom';

import { MessageList } from '../../components/MessageList';
import { MessageInput } from '../../components/MessageInput';
import { CHATS } from '../../mochs/chats'

import { makeStyles } from '@material-ui/core/styles'

const useStyle = makeStyles({
  photo: {
    background: "#F4F4F4",
    borderRadius: "10px",
    border: "3px solid red",
  },
});

export const Message = () => {
  const classes = useStyle();
  const { chatId } = useParams();
  const [messageList, setMessageList] = useState([]);

  const sendMessage = (author, text) => {
    const newMessageList = [...messageList];
    const newMessge = {
      author,
      text
    };
    newMessageList.push(newMessge);
    setMessageList(newMessageList);
  };

  const onSendMessage = (value) => {
    sendMessage('user', value)
  };

  useEffect(() => {
    if (messageList.length === 0) {
      return;
    }

    const tail = messageList[messageList.length - 1];
    if (tail.author === 'bot') {
      return;
    }
    setTimeout(() => {sendMessage('bot', 'Hello!')}, 1500);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messageList]);

  if (!CHATS.find(({id}) => id !== chatId )) {
    return <Redirect to="/" />
  }

  return (
    <div className={classes.photo}>
      <MessageList messageList={messageList}/>
      <MessageInput onSend={onSendMessage}/>
    </div>
  )
} 