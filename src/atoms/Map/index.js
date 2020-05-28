import React  from 'react';
import styles from './styles.module.css';

const Map = ({...props}) => (
    <div {...props}>
        <iframe 
            src="https://maps.google.co.jp/maps?output=embed&q=西川手　あんしんセキュリティ&z=16" 
            frameBorder="0"
            scrolling="no" 
            height="600"
            width="1120"
            >
        </iframe>
    </div>
);

export default Map;