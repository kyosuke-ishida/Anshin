import React              from 'react';
import styles             from './styles.module.css';
import MeadiaObjectLayout from '../../atoms/MediaObjectLayout/index';
import Img                from '../../atoms/Img/index';
import img                from '../../../public/business-img01.jpg';
import ContentHeading     from '../../molecules/ContentHeading/index';
import BusinessOutline    from '../../molecules/BusinessOutline/index';
import {corporatePage}    from '../../data/data';

const CompanyInf = ({...props}) => (
    <section {...props}>
        <ContentHeading title={'会社情報'} eng={'Company Information'}></ContentHeading>
        <MeadiaObjectLayout layout={'half'}>
            <BusinessOutline 
                heading={'会社情報'}
                outline={'ここに会社情報が入ります。ここに会社設立の原点を書いてはどうか。'}
                buttonTxt={'会社情報'}
                page={corporatePage}
            />
            <Img src={img} className={styles.img} />
        </MeadiaObjectLayout>
    </section>
);


export default CompanyInf;