import React, {Component} from 'react';
import CorporateTemplate  from '../templates/CorpolateTemplate/index';
import SEO                from '../atoms/SEO/index';

export default class CorporatePage extends Component {
    render() {
        return (
            <>
                <SEO />
                <CorporateTemplate />
            </>
        );
    }
}