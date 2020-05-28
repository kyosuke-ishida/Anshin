import React from 'react';
import Heading, { HeadingUnderlined } from './index.js';
import { storiesOf } from '@storybook/react';


storiesOf('Heading', module)
    .add('デフォルト',　()=><Heading>デフォルト</Heading>)
    .add('レベル１', ()=><Heading level={1}>見出しレベル１</Heading>)
    .add('レベル１、見た目２', ()=><Heading level={1} visualLevel={2}>レベル１、見た目２</Heading>)
    .add('下線つき', ()=><HeadingUnderlined>下線つき</HeadingUnderlined>)
    .add('下線つき、レベル１', ()=><HeadingUnderlined level={1}>下線つき、レベル１</HeadingUnderlined>)
    .add('下線つき、レベル１、見た目２', ()=><HeadingUnderlined level={1} visualLevel={2}>下線つき、レベル１、見た目２</HeadingUnderlined>);
    