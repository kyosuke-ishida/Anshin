import React       from 'react';
import styles      from './styles.module.css';
import Map         from '../../atoms/Map/index';
import Txt         from '../../atoms/Txt/index';
import {
        direction,
        nearestStation
        }           from '../../data/data';

const CorporateMap = ({...props}) => (
    <div {...props}>
        <div className={styles.root}>
            <Map />
            <div className={styles.direction}>
                <Txt className={styles.text}>
                    {direction}
                    <br />
                    {nearestStation}
                </Txt>        
            </div>
        </div>
    </div>
);

export default CorporateMap;