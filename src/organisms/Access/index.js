import React          from 'react';
import ContentHeading from '../../molecules/ContentHeading/index';
import MapCorporate   from '../../molecules/CorporateMap/index';

const Access = ({title, eng, ...props}) => (
    <section {...props}>
        <ContentHeading title={title} eng={eng}/>
        <MapCorporate />
    </section>      
);

export default Access;