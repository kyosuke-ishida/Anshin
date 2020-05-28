/* eslint-disable import/first */
// {/* 動的に<h1>〜<h6>を生成 */}
import React from 'react';
import styles from './styles.module.css';
import {containPresenter} from '../../utils/HoC';

export const HeadingPresenter = ({
    tag:Tag,
    visualLevel,
    className,
    ...props
  }) => (
    <Tag className={[ styles.h, styles[`h${ visualLevel }`], className ].join(' ')} { ...props } />
  );
  
  export const HeadingUnderlinedPresenter = ({
    tag:Tag,
    visualLevel,
    className,
    ...props
  }) => (
    <Tag className={[ styles.h, styles.underlined, styles[`h${ visualLevel }`], className ].join(' ')} { ...props } />
  );
  
  export const HeadingContainer = ({
    presenter,
    level = 2,
    visualLevel,
    ...props
  }) => {
    level = Math.max(1, Math.min(6, level));
    visualLevel = (typeof visualLevel !== 'undefined') ? visualLevel : level;
    const tag = `h${ level }`;
  
    return presenter({ tag, visualLevel, ...props });
  };
      
const Heading = containPresenter(HeadingContainer, HeadingPresenter);
export default Heading;


export const HeadingUnderlined = props => (
    <HeadingContainer presenter={presenterProps => 
            <HeadingUnderlinedPresenter {...presenterProps} />} 
            {...props}
    />
);

