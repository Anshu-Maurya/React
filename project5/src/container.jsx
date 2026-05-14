import styles from "./container.module.css";
import React from "react";
const Container = (props) => {
  return (
    <React.Fragment>
      <div className={styles.container}>{props.children}
        <button class='btn btn-primary new' onClick={()=>console.log('you clicked on buuto ')} > click</button>
      </div>
    </React.Fragment>
  );
};
export default Container;
