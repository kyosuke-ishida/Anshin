import React from 'react';
import { storiesOf } from '@storybook/react';
import Img from './index.js';

storiesOf('Img', module)
    .add('デフォルト', () => <Img src={`${process.env.PUBLIC_URL}/img01.jpg`} width="128" height="72" />);