import React     from 'react';
import styles    from './styles.module.css';
import {Link}    from '@reach/router';

const defaultItems = [];

const Breadcrumb = (items=defaultItems) => (
    <ul className={styles.root} itemScope itemtype="https://schema.org/BreadcrumbList">
        {items.map((item, idx) => (
            <li key={idx} className={styles.item} 
            itemprop="itemListElement" itemScope
            itemtype="https://schema.org/ListItem">
                {items.length - 1 > idx ? 
                    <Link to={item.url} itemprop="item">
                        {item.label}
                    </Link>
                 : <span>{item.label}</span>}
                 <meta itemprop="position" content={idx - 1} />
            </li>
           ))
        }
    </ul>
);

export default Breadcrumb;