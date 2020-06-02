import React           from 'react';
import styles          from './styles.module.css';
import {PrimaryButton} from '../../atoms/Button/index';
import Header          from '../../organisms/Header/index';
import PageTitle       from '../../molecules/PageTitle/index';
import ContactForm     from '../../organisms/ContactForm/index';
import Footer          from '../../organisms/Footer/index';
import {
    navigations,
    contactHeading    
}                      from '../../data/data';
import img             from '../../../public/sampleimage.001.jpeg';

const items = [
    {term: 'お名前'                 , description: <span className={styles.inputwrapper}><input type="text"  name="name"              label="お名前" 　　　　　　className={styles.input} /></span>},
    {term: '法人名'                 , description: <span className={styles.inputwrapper}><input type="text"  name="corporation"       label="法人名" 　　　　　　className={styles.input} /></span>},
    {term: 'メールアドレス'           , description: <span className={styles.inputwrapper}><input type="email" name="email"             label="メールアドレス" 　　className={styles.input} /></span>},
    {term: '電話番号'                , description: <span className={styles.inputwrapper}><input type="text"  name="tel-num"          label="電話番号" 　　　　　className={styles.input} /></span>},
    {term: 'お問い合わせ内容'         , description: <span className={styles.inputwrapper}><textarea           name="message"           label="お問い合わせ内容"   className={styles.textarea}></textarea></span>},
    {term: ''                       , description: <PrimaryButton type="submit">送信</PrimaryButton>}
];

const ContactTemplate = () => (
    <div>
        <Header navigations={navigations} />
        <PageTitle title={contactHeading.title} eng={contactHeading.eng} img={img} className={styles.section}/> 
        <ContactForm 
            items={items} 
            className={[styles.form, styles.section].join(' ')} 
        />
        <Footer  navigations={navigations} />
    </div>
);

export default ContactTemplate;