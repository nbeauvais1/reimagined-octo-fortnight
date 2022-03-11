import React from 'react'

import {IoNotificationsOutline, IoSettingsOutline} from 'react-icons/io5'
import {CgProfile} from 'react-icons/cg'
import {MdMarkEmailUnread} from 'react-icons/md'

import {AppBarStyles, AppBarItems, AppBarLogo, AppBarItem} from './styles'
import {IconButton} from './../../ui/buttons';
import logoFull from './logoFull.svg';

function AppBar (props){
    return(
        <AppBarStyles>
            <AppBarItems>
                <AppBarLogo><img src={logoFull} alt="Full plant logo." /></AppBarLogo>
                
                <AppBarItem>
                    <IconButton><IoNotificationsOutline color="758173" size="1.5rem"/></IconButton>
                    <IconButton><MdMarkEmailUnread color="758173" size="1.5rem"/></IconButton>
                    <IconButton><IoSettingsOutline color="758173" size="1.5rem"/></IconButton>
                    <IconButton><CgProfile color="758173" size="2rem"/></IconButton>
                </AppBarItem>
            </AppBarItems>
        </AppBarStyles>
    )
}

export default AppBar