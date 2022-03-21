import { Button, List } from '@material-ui/core';
import protoTypes from 'prop-types';
import { Chat } from './Chat';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles({
  buttonAdd: {
    borderRadius: "10px",
    border: "transperent",
    margin: "50px 0 0 0",
    padding: "10px 0",
    cursor: "pointer",
    width: "100%",
    textAlign: "center"
  },
});

export const ChatList = ({ list }) => {
  const classes = useStyle();

  return (
    <List>
      {list.map((item) => (
        <Chat key={item.id} {...item}/>
      ))}
      <Button disabled className={classes.buttonAdd} color={'secondary'}>ADD CHAT</Button>
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