import React, {Component} from "react";
import HomeTemplate       from '../templates/HomeTemplate/index';
import SEO                from '../atoms/SEO/index';
import                         '../styles/global.css'

export default class HomePage extends Component {
    render() {
        return (
            <>
                <SEO />
                <HomeTemplate />
            </>
        );
    }
}
