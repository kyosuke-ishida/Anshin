import React  from 'react';
import styles from './styles.module.css';

// リスト表示などで左に写真　右に情報などをレイアウトするコンポーネント
const MediaObjectLayout = ({
    layout='flex',
    children, 
    className, 
    tag:Tag = 'div'
}) => (
    <Tag className={[styles[`container${layout}`], className].join(' ')}>
        {/* 一番最初の子Compタグ */}
        {layout==='half' ? 
            <div className={styles[`content${layout}`]}>{children[0]}</div> 
          : <div>{children[0]}</div>
        }
        {/* 2番目の子Compタグ */}
        <div className={styles[`body${layout}`]}>{children.slice(1)}</div>
    </Tag>
);

export default MediaObjectLayout;