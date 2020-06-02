import React                 from 'react';
import styles                from './styles.module.css';
import PageTitle             from '../../molecules/PageTitle/index';
import Header                from '../../organisms/Header/index';
import Greeting              from '../../organisms/Greeting/index';
import ComrporateInformation from '../../organisms/CorporateInformation/index';
import Access                from '../../organisms/Access/index';
import Contact               from '../../organisms/Contact/index';
import Footer                from '../../organisms/Footer/index';
import {
        navigations, 
        corporateHeading,
        greetingHeading,
        ceoName,
        table,
        accessHeading
        }  　　　　　　　       from '../../data/data';
import img                    from '../../../public/sampleimage.001.jpeg';

const CorporateTemplate = () => (
    <div>
        <Header navigations={navigations}/>
        <PageTitle 
            title={corporateHeading.title} 
            eng={corporateHeading.eng} 
            img={img}  
            className={styles.section}
        /> 
        <Greeting 
            title={greetingHeading.title}
            eng={greetingHeading.eng}
            ceoName={ceoName}
            className={styles.section}
        />
        <ComrporateInformation 
            title={corporateHeading.title} 
            eng={corporateHeading.eng} 
            items={table} 
            className={styles.section} 
        />
        <Access 
            title={accessHeading.title} 
            eng={accessHeading.eng} 
            className={styles.section} 
        />
        <Contact />
        <Footer navigations={navigations} />
    </div>
);

export default CorporateTemplate;