import React from 'react';
import {storiesOf} from '@storybook/react';
import Header from './index';

const navigations = [
    {label: 'ホーム', url: '#'},
    {label: '番組', url: '#'},
    {label: '通知番号', url: '#'},
    {label: 'お知らせ', url: '#'},
    {label: '設定', url: '#'}
];

storiesOf('Header', module)
    .add('デフォルト', ()=><Header navigations={navigations} />);