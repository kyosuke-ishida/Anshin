import React         from 'react';
import styles        from './styles.module.css';
import Heading       from '../../atoms/Heading/index';
import Txt           from '../../atoms/Txt/index';
import Arrow         from '../../atoms/Arrow/index';
import {Link}        from '@reach/router';
import {recruitPage} from '../../data/data';

const Recruit = ({...props}) => (
    <section {...props}>
        <Link to={recruitPage} className={styles.links}>
            <div className={styles.contents}>
                <Heading className={styles.heading}>採用情報</Heading>
                <div className={styles.inline}>
                    <Txt className={styles.text}>あんしんセキュリティーは、一緒に地域の安全を守るための人材を募集しています。</Txt>
                    <Arrow className={styles.arrow} />
                </div>
            </div>
        </Link>
    </section>
);

export default Recruit;