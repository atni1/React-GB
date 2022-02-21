import styles from './message.module.css';
console.log(styles);
export const Message = (props) => {
  return(
    <div className={styles.wrapper}>
      <h1 className={styles.header}>{props.content}</h1>
      <p className={styles.text}>{props.children}</p>
    </div>
    
  )
}