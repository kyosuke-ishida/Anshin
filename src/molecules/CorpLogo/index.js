import React  from 'react';
import styles from './styles.module.css';
import Img    from '../../atoms/Img/index';
import Anchor from '../../atoms/Anchor/index';
import logo   from '../../../public/logo.jpeg';

const CorpLogo = ({
    children
    ,href="/"
    ,width="200"
    ,alt='会社ロゴ'
    ,className
    , ...props
}) => (
    <div className={[styles.root, className].join(' ')} {...props}>
        <Anchor className={styles.logo} href={href} alt={alt}>
            <Img src={logo} width={width} />
            <span className={styles.name}>{children}</span>
        </Anchor>
    </div>
);

export default CorpLogo;