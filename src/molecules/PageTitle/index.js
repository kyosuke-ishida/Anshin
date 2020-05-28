import React          from 'react';
import styles         from './styles.module.css';
import Img            from '../../atoms/Img/index';
import ContentHeading from '../../molecules/ContentHeading/index';

const PageTitle = ({title, eng, img, ...props}) => (
    <div {...props}>
        <div className={styles.titlewrapper}>
        <ContentHeading title={title} eng={eng}/>
        </div>
        <div className={styles.visualwrapper}>
        <Img src={img} className={styles.image}/>
        </div>
    </div>
);

export default PageTitle;