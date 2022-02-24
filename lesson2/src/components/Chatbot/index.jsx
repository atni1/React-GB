import { useState, useEffect } from 'react';

export const Chatbot = () => {
  const [messageList, setMessageList] = useState([]);
  const [value, setValue] = useState('');

  const sendMessage = (author, text) => {
    const newMessageList = [...messageList];
    const newMessge = {
      author,
      text
    };
    newMessageList.push(newMessge);
    setMessageList(newMessageList);
  };

  const resetForm = () => {
    setValue('');
  };

  const onSubmitMessage = (event) => {
    event.preventDefault();
    sendMessage('user', value);
    resetForm();
  };

  const onChangeMessageInput = (event) => {
    setValue(event.target.value);
  }

  useEffect(() => {
    if (messageList.length === 0) {
      return;
    }

    const tail = messageList[messageList.length - 1];
    if (tail.author === 'bot') {
      return;
    }
    setTimeout(() => {sendMessage('bot', 'Hello!')}, 1500);
  }, [messageList]);

  return (
    <div>
      <form onSubmit={onSubmitMessage}>
        <input 
          onChange={onChangeMessageInput}
          placeholder="Введите сообщение"
          value={value}
          type="text"/>
        <button>Send</button>
      </form>
      <ul>
        {
          messageList.map((item, index) => (
            <li key={index}>
              {item.author}: {item.text}
            </li>
          ))
        }
      </ul>
    </div>
  );
};