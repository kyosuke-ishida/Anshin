import React          from 'react';
import styles         from './styles.module.css';
import DefinitionList from '../../atoms/DefinitionList/index';

const ContactForm = ({items, ...props}) => (
    <section {...props}>
        <div className={styles.wrapper}>
            <p className={styles.text}>下記のフォームに項目を入力の上、「送信」ボタンを押してください。
                なお、内容によっては、ご連絡までお時間がかかるものがございますので、あらかじめご了承ください。</p>
            <form name="contact" method="POST" data-netlify="true">                     
                <DefinitionList items={items} type={'__input'}/>
            </form>
        </div>
    </section>
);

export default ContactForm;