import React  from 'react';
import styles from './styles.module.css';

const DefinitionList = ({
    items,
    type = '',
    ...props
}) => (
    <div {...props}>
        {items.map((item, idx) => (
            <dl key={idx} className={styles[`definition${type}`]}>
                <dt className={styles[`definition__term${type}`]}>{item.term}</dt>
                <dd className={styles[`definition__desc${type}`]}>{item.description}</dd>
            </dl>
        ))}
    </div>
);

export default DefinitionList;