import React   from 'react';
import styles  from './styles.module.css';
import Heading from '../../atoms/Heading/index';
import Txt     from '../../atoms/Txt/index';

// メインコピーのコンポーネント
const MainCopy = ({
    items,
    heading,
    ...props
}) => (
    <div {...props}>
        {/* サブコピーを自動生成 */}
        {items.map((item, idx) => (
            <Txt key={idx} className={[styles.item, styles.sub].join(' ')} tag={'p'} size={'m'}>
                {item.text}
            </Txt>
        )) }
        <Heading className={[styles.item, styles.main].join(' ')} visualLevel={2}>{heading}</Heading>
    </div>
);

export default MainCopy;