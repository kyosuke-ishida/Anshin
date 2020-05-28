import React  from 'react';
import styles from './styles.module.css';
import {Link} from '@reach/router';

const Navigation = ({items, ...props}) => (
    <nav {...props}>
        <ul className={styles.list}>
            {items.map((item, idx) => (
                <li key={idx} className={styles.item}>
                    {!item.current ? 
                        <Link to={item.url} className={styles.link}>{item.label}</Link> :
                    <span className={[styles.link, styles.current].join(' ')}>{item.label}</span>
                    }
                </li>
            )) }
        </ul>
    </nav>
);

export default Navigation;