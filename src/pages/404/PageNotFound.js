import React, {useState, Component } from 'react';
import {Link} from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../libs/firebase';

import {PNFStyles, Banner} from './styles'
import {Heading1, Underline} from '../../typography/headings';

function PageNotFound (props){
    const [isUser, setIsUser] = useState(false)

    onAuthStateChanged(auth, (user)=>{
        if(user){
            setIsUser(true)
        }
        else
        {
            setIsUser(false)
        }
    })
    
    return (
        <PNFStyles>
            <Banner>
                <Heading1>404 - You seem to have taken the wrong path.</Heading1>
                <Underline/>
                    {
                        isUser? <Link to='/dashboard'>Back to Safety</Link> : <Link to='/'>Back to Safety</Link>
                    }
                </Banner>                    
        </PNFStyles>
    )
}

export default PageNotFound