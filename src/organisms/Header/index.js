import React         from 'react';
import styles        from './styles.module.css';
import CorpLogo      from '../../molecules/CorpLogo/index';
import Navigation    from '../../molecules/Navigation/index';
import HamburgerMenu from '../HamburgerMenu/index';

const Header = ({className, navigations, ...props}) => (
    <section className={[styles.header, className].join(' ')} {...props}>
        <div className={styles.headerinner}>
            <div className={styles.corpname}>
                <CorpLogo>株式会社あんしんセキュリティー</CorpLogo>
            </div>
            <div className={styles.lists}>
                <Navigation items={navigations} />
            </div>
            <div className={styles.hamburgermenu}>
                <HamburgerMenu />
            </div>
        </div>
    </section>
);

export default Header;