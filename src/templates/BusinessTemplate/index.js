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
        <div 
            className={[styles.headwrapper, styles.section].join(' ')}
        >
          <Heading className={styles.heading} level={1}>あらゆる現場におもむき、<br />交通誘導を通して地域の安全を維持します。</Heading>
          <Txt className={styles.text}>あんしんセキュリティーは道路工事や建築現場だけではなく<br/>様々なイベント警備業務の実績があります。経験豊富な警備員がお客様の業務を全力でサポートします。</Txt>
        </div>
        <MediaObjectLayout layout='half' tag={'section'} className={styles.section}>
        <div>
                <Img src={img01} className={styles.img}/>
            </div>
            <div className={styles.outline}>
                <ContentHeading title={'交通誘導警備業務'} eng={'Traffic Control'} />
                <Txt>交通誘導を行います。</Txt>
            </div>
        </MediaObjectLayout>
        <MediaObjectLayout layout='half' tag={'section'} className={[styles.section, styles.media].join(' ')}>
        <div className={styles.outline}>
                <ContentHeading title={'イベントなどの警備業務'} eng={'Crowed Control'}></ContentHeading>
                <Txt>イベントなどの雑踏警備を行います。</Txt>
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