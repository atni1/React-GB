import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles'
import { ChatList } from './components/ChatList';
import { MessageList } from './components/MessageList';
import { MessageInput } from './components/MessageInput';

const useStyle = makeStyles({
  wrapper: {
    display: "grid",
    gridTemplateColumns: "200px 700px"
  }
});

export const ChatBot = () => {
  const classes = useStyle();

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

  return (
    <div className={classes.wrapper}>
      <ChatList 
        list={[
          {
            id: '1',
            name: 'Tim',
          },
          {
            id: '2',
            name: 'Joe',
          },
          {
            id: '3',
            name: 'Rose',
          },
          {
            id: '4',
            name: 'Kevin',
          },
          {
            id: '5',
            name: 'Jimmy',
          },
      ]}/>
      <div>
        <MessageList messageList={messageList}/>
        <MessageInput onSend={onSendMessage}/>
      </div>
    </div>
  )
}