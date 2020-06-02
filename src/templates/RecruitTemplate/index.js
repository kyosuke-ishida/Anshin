// ****************
// 採用情報ページ
// ****************

import React                 from 'react';
import styles                from './styles.module.css';
import PageTitle             from '../../molecules/PageTitle/index';
import Header                from '../../organisms/Header/index';
import RecruitTitle          from '../../organisms/RecruitTitle/index';
import Contact               from '../../organisms/Contact/index';
import Footer                from '../../organisms/Footer/index';
import {
        navigations, 
        recruitHeading,
        applicantGuideline
    }  　　　　　　　          from '../../data/data';
import Heading               from '../../atoms/Heading/index';
import DefinitionList        from '../../atoms/DefinitionList/index';
import MediaObjectLayout     from '../../atoms/MediaObjectLayout/index';
import Txt                   from  '../../atoms/Txt/index';

import headingImg            from '../../../public/sampleimage.001.jpeg';
import recruitImg            from '../../../public/corpimg.001.jpeg';

const RecruitTemplate = () => (
    <div>
        <Header navigations={navigations}/>
        <PageTitle 
            title={recruitHeading.title} 
            eng={recruitHeading.eng}
            img={headingImg}
            className={styles.section}
        />
        <RecruitTitle 
            recruitImg={recruitImg} 
            className={styles.section} 
        />
        <section 
            className={[styles.definitionwrapper, styles.section].join(' ')} 
        >
            <DefinitionList items={applicantGuideline} className={styles.definitionlist} />
        </section>
        <section 
            className={[styles.messagewrapper, styles.section].join(' ')} 
        >
            <Heading level={5} className={styles.messagetitle}>メッセージ</Heading>
            <MediaObjectLayout 
                layout={'half'} 
                className={styles.media}
            >
                <div>
                    <Heading level={4} className={styles.messagebig}>
                        採用候補者に求めることその１を書く。または業務で意識していること、すべきこと
                    </Heading>
                </div>
                <div className={styles.text}>
                    <Txt className={styles.message}>
                        
                        SEOを意識した文章をかく。以下は例。水道工事やイベントなど、様々な現場で経験を積むことができます。
                        最初は実務経験者と現場を経験していただき、徐々にリーダーとして現場を率いていただきます。
                    </Txt>
                </div>
            </MediaObjectLayout>
            <MediaObjectLayout layout={'half'}>
                <div>
                    <Heading level={4} className={styles.messagebig}>
                        採用候補者に求めることその2を書くまたは業務で意識していること、すべきこと
                    </Heading>
                </div>
                <div className={styles.text}>
                    <Txt className={styles.message}>
                        SEOを意識した文章をかく。以下は例。水道工事やイベントなど、様々な現場で経験を積むことができます。
                        最初は実務経験者と現場を経験していただき、徐々にリーダーとして現場を率いていただきます。</Txt>
                </div>
            </MediaObjectLayout>
        </section>
        <Contact />
        <Footer navigations={navigations} />
    </div>
); 

export default RecruitTemplate;