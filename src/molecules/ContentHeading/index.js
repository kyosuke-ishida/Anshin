import React   from 'react';
import styles  from './styles.module.css';
import Heading from '../../atoms/Heading/index'
import Txt     from '../../atoms/Txt/index';

const ContentHeading = ({
    title,
    eng,
    className,
    ...props
}) => (
    <div className={[styles.root, className].join(' ')} {...props}>
        <Heading className={styles.heading} visualLevel={2}>{title}</Heading>
        <Txt className={styles.eng}>{eng}</Txt>
    </div>
);

export default ContentHeading;