import React                 from 'react';
import styles                from './styles.module.css';
import Img                   from '../../atoms/Img/index';
import Heading               from '../../atoms/Heading/index';

const RecruitTitle = ({recruitImg, ...props}) => (
    <div {...props}>
        <div className={styles.recruitheading}>
            <Img src={recruitImg} className={styles.img} />
            <div className={styles.headingwrapper}>
                <Heading level={3} className={styles.heading}>
                    <span className={styles.text}>採用について</span>
                </Heading>
            </div>
        </div>
    </div>
);

export default RecruitTitle;