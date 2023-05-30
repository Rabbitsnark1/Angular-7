import React from "react";
import classes from './MyButton.module.css';

const MyButton = ({children, ...props}) => {
    return (
        <button {...props} className={classes.MyBth}>
            {children}
        </button>
    );
};

export default MyButton;