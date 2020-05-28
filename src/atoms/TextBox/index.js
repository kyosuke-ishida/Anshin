import React from 'react';
import styles from './styles.module.css';

const TextBox = ({className, ...props}) => (
    <input type="text" className={[styles.textbox, className].join(' ')}{...props} />
);

export default TextBox;