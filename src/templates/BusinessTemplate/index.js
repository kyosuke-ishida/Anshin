import React             from 'react';
import styles            from './styles.module.css';
import PageTitle         from '../../molecules/PageTitle/index';
import Header            from '../../organisms/Header/index';
import Contact           from '../../organisms/Contact/index';
import Footer            from '../../organisms/Footer/index';
import {
    navigations, 
    businessHeading
}                        from '../../data/data';
import img               from '../../../public/sampleimage.001.jpeg';

import Heading           from '../../atoms/Heading/index';
import Txt               from '../../atoms/Txt/index';
import MediaObjectLayout from '../../atoms/MediaObjectLayout';
import Img               from '../../atoms/Img/index';
import ContentHeading    from '../../molecules/ContentHeading/index';
import img01             from '../../../public/business-img01.jpg';

const BusinessTemplate = () => (
    <div>
        <Header navigations={navigations} />
        <PageTitle title={businessHeading.title} eng={businessHeading.eng} img={img} className={styles.section}/> 
        <div className={[styles.headwrapper, styles.section].join(' ')}>
          <Heading className={styles.heading} level={1}>あらゆる現場におもむき、<br />交通整備や誘導を通して地域の安全を維持します。</Heading>
          <Txt className={styles.text}>あんしんセキュリティは水道工事や建築現場だけではなく<br/>様々なイベントの交通整備や人の誘導の実績があります。経験豊富な警備員がお客様の業務を全力でサポートします。</Txt>
        </div>
        <MediaObjectLayout layout='half' tag={'section'} className={styles.section}>
        <div>
                <Img src={img01} className={styles.img}/>
            </div>
            <div className={styles.outline}>
                <ContentHeading title={'水道工事'} eng={'Piping Work'} />
                <Txt>水道工事をメインで行います。</Txt>
            </div>
        </MediaObjectLayout>
        <MediaObjectLayout layout='half' tag={'section'} className={[styles.section, styles.media].join(' ')}>
        <div className={styles.outline}>
                <ContentHeading title={'水道工事'} eng={'Piping Work'}></ContentHeading>
                <Txt>水道工事をメインで行います。</Txt>
            </div>
            <div>
                <Img src={img01} className={styles.img} />
            </div>
            
        </MediaObjectLayout>
        <Contact className={styles.interval} />
        <Footer  navigations={navigations} />
    </div>
);

export default BusinessTemplate;