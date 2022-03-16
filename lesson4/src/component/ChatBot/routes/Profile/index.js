import { makeStyles } from '@material-ui/core/styles'

const useStyle = makeStyles({
  wrapper: {
    display: "flex",
    justifyContent: "center",
    margin: "50px 0 0 0"
  }
});

export const Profile = () => {
  const classes = useStyle();

  return (
    <div className={classes.wrapper}>
      <h1>Profile</h1>
    </div>
  )
}