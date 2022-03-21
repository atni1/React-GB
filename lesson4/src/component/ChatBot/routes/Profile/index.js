import { makeStyles } from '@material-ui/core/styles'

import { useSelector, useDispatch } from 'react-redux'
import {TOGGLE_SHOW_PROFILE} from '../../store/profile/actions'

const useStyle = makeStyles({
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: 'center',
    margin: "50px 0 0 0"
  },
  text: {
    textAlign: 'center',
  },
  colorRed: {
    color: 'red'
  },
  checkbox: {
    opacity: '0',
    zIndex: "-100",
  }
});

export const Profile = () => {
  const classes = useStyle();

  const dispatch = useDispatch();
  const isShow = useSelector((state) => state.isShow)


  return (
    <div>
      <p className={classes.text}>Нажми на заголовок</p>
      <div className={classes.wrapper}>
        <label for="checkbox">
          <h1 className={isShow? classes.colorRed: null}>Profile</h1>
          <input  
            id="checkbox"
            type="checkbox" 
            checked={isShow} 
            className={classes.checkbox}
            onChange={() => {
              dispatch({
                type: TOGGLE_SHOW_PROFILE
              })
            }}
          />
        </label>
      </div>
      <div className={classes.wrapper}>
        <p>Ести цвет заголовка красный, isShow=true<br></br>
        Ести цвет заголовка черный, isShow=false
        </p>
      </div>
    </div>
  )
}