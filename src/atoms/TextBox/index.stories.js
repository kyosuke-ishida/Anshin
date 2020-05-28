import React from 'react';
import {storiesOf} from '@storybook/react';
import TextBox from './index';

storiesOf('TextBox', module)
    .add('デフォルト', ()=><TextBox />);