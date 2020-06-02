import React, {Component} from 'react';
import ContactTemplate    from '../templates/ContactTemplate/index';
import SEO                from '../atoms/SEO/index';

export default class ContactPage extends Component {
    render() {
        return (
            <>
                <SEO />
                <ContactTemplate />
            </>
        )
    };
}