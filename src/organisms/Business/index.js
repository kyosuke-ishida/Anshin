import React              from 'react';
import styles             from './styles.module.css';
import MeadiaObjectLayout from '../../atoms/MediaObjectLayout/index';
import Img                from '../../atoms/Img/index';
import img                from '../../../public/business-img01.jpg';
import ContentHeading     from '../../molecules/ContentHeading/index';
import BusinessOutline    from '../../molecules/BusinessOutline/index';
import {businessPage}    from '../../data/data';

const Business = ({...props}) => (
    <section {...props}>
        <ContentHeading title={'事業内容'} eng={'Business'}></ContentHeading>
        <MeadiaObjectLayout layout={'half'}>
            <Img src={img} className={styles.img} />
            <BusinessOutline 
                heading={'事業内容'}
                outline={'ここに事業内容の概要が入ります。ここに事業内容の概要が入ります。ここに事業内容の概要が入ります。'}
                buttonTxt={'事業内容'}
                page={businessPage}
            />
        </MeadiaObjectLayout>
    </section>
);


export default Business;