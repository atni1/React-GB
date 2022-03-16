import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar, Button  } from '@material-ui/core'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'

import { Chats } from './routes/Chats'
import { Home } from './routes/Home'
import { Profile } from './routes/Profile'
import { Message } from './routes/Message'

const useStyle = makeStyles({
  header: {
    display: "flex",
    position: "static",
    justifyContent: "center",
    margin: "0 0 20px 0",
  },
  wrapper: {
    display: "flex",
    justifyContent: "space-between",
    width: "500px",
    margin: "0 auto"
  },
  buttonNaw: {
    color: "white",
    fontSize: "24px"
  }
})

export const Chat = () => {
  const classes = useStyle();

  return (
    <div>
      <BrowserRouter>
        <AppBar 
          color={'secondary'}
          className={classes.header}>
          <Toolbar className={classes.wrapper}>
            <Button to="/" component={Link} className={classes.buttonNaw}>
              Home
            </Button>
            <Button to="/profile" component={Link} className={classes.buttonNaw}>
              Profile
            </Button>
            <Button to="/chats" component={Link} className={classes.buttonNaw}>
              Chats
            </Button>
          </Toolbar>
        </AppBar>
        <Switch>
          <Route path="/chats">
            <Chats >
              <Route path="/chats/:chatId" component={Message} />
            </Chats>
          </Route >
          <Route component={Profile} path="/profile" />
          <Route component={Home} path="/" />
        </Switch>
      </BrowserRouter>
    </div>
  )
}