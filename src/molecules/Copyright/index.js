import React          from 'react';
import styles         from './styles.module.css';
import {CopyrightTxt} from '../../atoms/Txt';

const Copyright = ({children, ...props}) => (
        <CopyrightTxt 
            tag={'small'} 
            className={styles.copyright}
            {...props}
        >
          ©︎ {children}
        </CopyrightTxt>
);

export default Copyright;