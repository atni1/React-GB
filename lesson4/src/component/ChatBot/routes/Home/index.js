import { makeStyles } from '@material-ui/core/styles'

const useStyle = makeStyles({
  wrapper: {
    display: "flex",
    justifyContent: "center",
    margin: "50px 0 0 0"
  }
});

export const Home = () => {
  const classes = useStyle();

  return (
    <div className={classes.wrapper}>
      <h1>Home</h1>
    </div>
  )
}