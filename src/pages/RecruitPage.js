import React, {Component} from 'react';
import RecruitTemplate    from '../templates/RecruitTemplate/index';
import SEO                from '../atoms/SEO/index';

export default class RecruitPage extends Component {
    render() {
        return (
            <>
                <SEO />
                <RecruitTemplate />
            </>
        );
    }
}