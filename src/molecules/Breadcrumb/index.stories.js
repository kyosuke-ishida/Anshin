import React from 'react';
import {storiesOf} from '@storybook/react';
import Breadcrumb from './index';

const items = [
    {label: 'トップ', url: '#'},
    {label: '番組', url: '#'},
    {label: '通知番組', url: '#'}
];

storiesOf('Breadcrumb', module)
    .add('デフォルト', ()=><Breadcrumb items={items} />)