import React from 'react';
import {Link, useNavigate} from 'react-router-dom';

import {DashBoard, Grid} from './styles.js';
import {AppBar} from '../../components/appbar'
import {SideBar} from '../../components/sidebar'
import {Panel} from '../../components/panels'

function DashBoardPage (props){
    return(
        <DashBoard>
            <AppBar/>
            <Grid>
                <SideBar/>
                <Panel/>
            </Grid>    
        </DashBoard>
    )
}

export default DashBoardPage