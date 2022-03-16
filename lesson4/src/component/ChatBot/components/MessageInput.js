import { useState, useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles'
import { IconButton, InputBase, Paper } from '@material-ui/core';

const useStyle = makeStyles({
  input: {
    padding: "16px",
    width: "600px"
  }
});

export const MessageInput = (props) => {
  const classes = useStyle();

  const [value, setValue] = useState('');
  const inputRef = useRef(null);

  const resetForm = () => {
    setValue('');
  };

  const onSubmitMessage = (event) => {
    event.preventDefault();
    props.onSend(value);
    resetForm();
  };

  const onChangeMessageInput = (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    inputRef.current.focus();
  })

  return (
    <Paper 
      className={classes.paper}
      component='form'
      onSubmit={onSubmitMessage}
    >
      <InputBase
        inputRef={inputRef}
        className={classes.input}
        onChange={onChangeMessageInput}
        value={value}
        type="text"
      />
      <IconButton type="submit">
        Send
      </IconButton>
    </Paper>
  )
}