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
        <MainCopy 
            className={styles.mainCopy} 
            items={items} 
            heading={heading} 
            data-sal="fade"
            data-sal-duration="300"
            data-sal-delay="300"
            data-sal-easing="ease"
        />
        <ImgSlide 
            data-sal="slide-left"
            data-sal-duration="400"
            data-sal-delay="300"
            data-sal-easing="ease"            
        />
        <Business 
            className={styles.interval} 
            data-sal="slide-right"
            data-sal-duration="400"
            data-sal-easing="ease"            
        />
        <CompanyInf 
            className={styles.interval} 
            data-sal="slide-left"
            data-sal-duration="400"
            data-sal-easing="ease"            
        />
        <Recruit className={styles.interval} 
            className={styles.interval} 
            data-sal="slide-right"
            data-sal-duration="400"
            data-sal-easing="ease"            
        />
        <Contact className={styles.interval} />
        <Footer  navigations={navigations}/>
    </div>
);

export default HomeTemplate;