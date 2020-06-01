import React              from 'react';
import styles             from './styles.module.css';
import MediaObjectLayout  from '../../atoms/MediaObjectLayout/index';
import Img                from '../../atoms/Img/index';
import ContentHeading     from '../../molecules/ContentHeading/index';
import img                from '../../../public/corpimg.001.jpeg';

const Greeting = ({
                   title,
                   eng, 
                   ceoName,
                   ...props
                 }) => (
    <section {...props}>
        <ContentHeading title={title} eng={eng} />
        <MediaObjectLayout className={styles.layout}>
            <Img src={img} className={styles.img} />
            <div className={styles.text}>
                 皆様に支えられて60年以上、株式会社あんしんセキュリティーは更なる希望を求め生産拠点を貝塚工場へ移転しました。<br />
                 変化し続ける社会環境の中で、顧客満足度の向上を合言葉に、お客様のニーズに合わせた生産形態を目指して精進して参ります。<br />
                 環境に合わせ、切削油を使わないドライギヤシェーパーやドライホブ盤を駆使し様々なギヤ加工を始め従来のブローチ加工に至るまで、全てにおいて量産品から多種少量生産にも対応できるよう準備しております。
                 <div className={styles.name}>代表取締役　　<em className={styles.em}>{ceoName}</em></div>
            </div>
        </MediaObjectLayout>
    </section>
);

export default Greeting;