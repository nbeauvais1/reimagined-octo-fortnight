import React from 'react'

import {MdDeleteOutline} from 'react-icons/md'
import { MdKeyboardArrowRight } from "react-icons/md";

import {PanelStyles, Path, TopBar, ProductCards} from './styles'
import {Heading1, Underline} from '../../typography/headings';
import {Button2} from '../../ui/buttons';
import { ProductPreview } from '../products/ProductPreview';

function Panel ({title, ...props}){
    
    return(
        <PanelStyles>
            <TopBar>
                <Path>Home <MdKeyboardArrowRight color="212529" size="1.5rem"/> Products<MdKeyboardArrowRight color="212529" size="1.5rem"/> View All Inventory</Path>
                <Button2><MdDeleteOutline color="758173" size="1.25rem"/>Delete Product</Button2>
            </TopBar>    
            <Heading1 Weight="normal" Align="Left">{title || "Display Panel"}</Heading1>
            <Underline Color="#758173" Align="auto auto auto 0"/>
            <ProductCards>
                <ProductPreview/>
                <ProductPreview/>
                <ProductPreview/>
                <ProductPreview/>
                <ProductPreview/>
                <ProductPreview/>
                <ProductPreview/>
                <ProductPreview/>
            </ProductCards>
        </PanelStyles>
    )
}

export default Panel