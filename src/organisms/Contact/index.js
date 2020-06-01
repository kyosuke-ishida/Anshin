import React           from 'react';
import styles          from './styles.module.css';
import ContentHeading  from '../../molecules/ContentHeading/index';
import Txt             from '../../atoms/Txt/index';
import Heading         from '../../atoms/Heading/index';
import LinkButton      from '../../molecules/LinkButton/index';
import {contactPage}   from '../../data/data';

const Contact = ({...props}) => (
    <section {...props}>
        <div className={styles.root}>
        <ContentHeading title={'お問い合わせ'} eng={'Contact'} />
            <div className={styles.body}>
                <div className={styles.inline}>
                    <div className={styles.left}>
                       ご相談・ご質問等ございましたら、<br/>お気軽にお問い合わせください。
                    </div>
                    <div className={styles.right}>
                        <Heading className={styles.tel}>058-213-7821</Heading>
                        <Txt className={styles.hour}>受付時間：平日9時〜18時</Txt>
                        <LinkButton buttonTxt={'お問い合わせ'} page={contactPage} />
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default Contact;