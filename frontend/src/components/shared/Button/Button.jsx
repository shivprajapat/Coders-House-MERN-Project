import React from 'react';
import styles from './button.module.css';
import { ArrowForward } from '../../../Assets/images'

const Button = ({ text, onClick }) => {
    return (
        <button onClick={onClick} className={styles.button}>
            <span>{text}</span>
            <img
                className={styles.arrow}
                src={ArrowForward}
                alt="arrow"
            />
        </button>
    );
};
export default Button;