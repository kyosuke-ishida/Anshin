import React           from 'react';
import {PrimaryButton} from '../../atoms/Button/index';
import {Link}          from '@reach/router';

const LinkButton = ({
    page,
    buttonTxt
}) => (
    <div>
    <Link to={page}>
        <PrimaryButton>{buttonTxt}</PrimaryButton>
    </Link>
    </div>
);

export default LinkButton;