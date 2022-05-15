import React from 'react'
import styles from "../styles/loading.module.css"



const Loading = () => {
  return (
    <div className="flex justify-center items-center">
<div className={styles.wrapper}>
  <div className={styles.blue}></div>
  <div className={styles.red}></div>  
  <div className={styles.yellow}></div>  
  <div className={styles.green}></div>  
</div>

    </div>
  )
}

export default Loading