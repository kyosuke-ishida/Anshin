import React, {cloneElement} from 'react';

// プロパティ(スタイル)を追加
export const withStyle = style => component => cloneElement(component, {style});