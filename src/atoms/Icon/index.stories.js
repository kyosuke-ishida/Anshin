import React from 'react';
import {storiesOf} from '@storybook/react';
import {TrashCanIcon, ChevronRightIcon, SearchIcon, SettingsIcon} from './index';

storiesOf('Icon', module)
    .add('TrashCanIcon', ()=><TrashCanIcon />)
    .add('ChevronRightIcon', ()=><ChevronRightIcon />)
    .add('SearchIcon', ()=><SearchIcon />)
    .add('SettingsIcon', ()=><SettingsIcon />);