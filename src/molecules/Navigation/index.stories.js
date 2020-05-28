import React from 'react';
import {storiesOf} from '@storybook/react';
import Navigation from './index';
import { withStyle } from '../../utils/decorators';

const items = [
    {label:'HOME', url: '#'},
    {label:'CONTACT' ,url: '#'},
    {label:'ACCESS', url: '#'}
]

storiesOf('Navigation', module)
    .add('デフォルト', ()=>withStyle({backgroundColor: 'black', padding: '1rem'})(<Navigation items={items} />));