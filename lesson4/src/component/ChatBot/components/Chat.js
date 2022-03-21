import { ListItem, ListItemText } from '@mui/material';
import protoTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom';

const useStyle = makeStyles({
  chat: {
    background: "#F4F4F4",
    borderRadius: "10px",
    border: "transperent",
    margin: "0 0 10px 0",
    cursor: "pointer"
  },
  chatText: {
    textAlign: "center"
  }
});


export const Chat = ({ id, name }) => {
  const classes = useStyle();

  return (
    <ListItem component={Link} to={`/chats/${id}`} className={classes.chat}>
      <ListItemText className={classes.chatText}>{name}</ListItemText>
    </ListItem>
  )
}

Chat.protoTypes = {
  id: protoTypes.string,
  name: protoTypes.string,
}