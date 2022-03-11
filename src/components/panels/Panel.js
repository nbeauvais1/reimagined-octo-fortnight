import React from 'react'

import {AiOutlinePlus} from 'react-icons/ai'
import { MdKeyboardArrowRight } from "react-icons/md";

import {PanelStyles, Path, TopBar} from './styles'
import {Heading1, Underline} from '../../typography/headings';
import {Button2} from '../../ui/buttons';

function Panel (props){
    
    return(
        <PanelStyles>
            <TopBar>
                <Path>Home <MdKeyboardArrowRight color="212529" size="1.5rem"/> Products</Path>
                <Button2><AiOutlinePlus color="758173" size="1.25rem"/>Add Product</Button2>
            </TopBar>    
            <Heading1 Weight="normal" Align="Left">Product Inventory</Heading1>
            <Underline Color="#212529" Align="auto auto auto 0"/>
        </PanelStyles>
    )
}

export default Panel