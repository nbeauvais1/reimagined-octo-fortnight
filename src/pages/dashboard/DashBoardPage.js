import React, {useState} from 'react'
import {Link, Outlet, useNavigate} from 'react-router-dom';

import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../libs/firebase';

import {DashBoard, Grid} from './styles.js';
import {AppBar} from '../../components/appbar'
import {SideBar} from '../../components/sidebar'
import {Panel} from '../../components/panels'

function DashBoardPage (props){
    const [isUser, setIsUser]= useState(false)
    const navigator = useNavigate();

    onAuthStateChanged(auth, (user) => {
        if(user){
            setIsUser(true)
        }
        else
        {
            setIsUser(false)
            navigator('/')
        }
    });

    if(isUser){
    return(
        <DashBoard>
            <AppBar/>
            <Grid>
                <SideBar/>
                <Outlet/>
            </Grid>    
        </DashBoard>
    )
    }
        return null
}

export default DashBoardPage