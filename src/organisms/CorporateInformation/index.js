import React          from 'react';
import styles         from './styles.module.css'
import ContentHeading from '../../molecules/ContentHeading/index';
import Table          from '../../atoms/Table/index';

const CorporateInformation = ({title, eng, items, ...props}) => (
    <section {...props}>
        <ContentHeading title={title} eng={eng}/>
        <Table items={items} className={styles.table}/>
    </section>
);

export default CorporateInformation;