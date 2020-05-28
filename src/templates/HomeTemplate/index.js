import React      from 'react';
import styles     from './styles.module.css';
import Header     from '../../organisms/Header/index';
import MainCopy   from '../../molecules/MainCopy/index';
import ImgSlide   from '../../atoms/ImgSlide/index';
import Business   from '../../organisms/Business/index';
import CompanyInf from '../../organisms/CompanyInf/index';
import Recruit    from '../../organisms/Recruit/index';
import Contact    from '../../organisms/Contact/index';
import Footer     from '../../organisms/Footer/index';
import {navigations,
        heading, 
        items}    from '../../data/data';

const HomeTemplate = () => (
    <div>
        <Header navigations={navigations} />
        <MainCopy className={styles.mainCopy} items={items} heading={heading}/>
        <ImgSlide />
        <Business className={styles.interval} />
        <CompanyInf className={styles.interval} />
        <Recruit className={styles.interval} />
        <Contact className={styles.interval} />
        <Footer  navigations={navigations}/>
    </div>
);

export default HomeTemplate;