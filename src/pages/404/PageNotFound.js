import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import {PNFStyles, Succulent, ALink} from './styles'
import {Heading1, Underline} from '../../typography/headings';
import succulent from './succulent.png'

function PageNotFound (props){
    
    return (
        <PNFStyles>
                <Succulent><img src={succulent} alt="Full plant logo."/></Succulent>
                <Heading1>404 - Page Not Found</Heading1>
                <Underline/>
                    <ALink><Link to="/">Back to Safety</Link></ALink>
        </PNFStyles>
    )
}

export default PageNotFound