import React           from 'react';
import styles          from './styles.module.css';
import Heading         from '../../atoms/Heading/index';
import Txt             from '../../atoms/Txt/index';
import LinkButton 　　　from '../LinkButton';


const BusinessOutline = ({
    heading,
    outline,
    buttonTxt,
    page
}) => (
    <div className={styles.outline}>
        <div className={styles.exp}> 
            <Heading visualLevel={3} className={styles.subhead}>{heading}</Heading>
            <Txt>{outline}</Txt>
        </div>
        <LinkButton page={page} buttonTxt={buttonTxt} />
    </div>
);

export default BusinessOutline;