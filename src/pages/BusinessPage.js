import React, {Component} from 'react';
import BusinessTemplate   from '../templates/BusinessTemplate/index';
import SEO                from '../atoms/SEO/index';

export default class BusinessPage extends Component {
    render() {
        return (
            <>
                <SEO />
                <BusinessTemplate />
            </>
        );
    }
}
