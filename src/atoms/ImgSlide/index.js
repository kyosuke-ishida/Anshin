import React  from 'react';
import styles from './styles.module.css';

const ImgSlide = ({className, ...props}) => (
    <section className={styles.root} {...props}>
        <ul className={styles.slide}>
            <li className={styles.list}></li>
        </ul>
    </section>
);

export default ImgSlide;