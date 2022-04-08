import React, {useState, useEffect} from 'react'

import {ref, get} from 'firebase/database'
import { db } from '../../libs/firebase';
import {MdDeleteOutline} from 'react-icons/md'
import { MdKeyboardArrowRight } from "react-icons/md";

import {ProductCard} from '../products/ProductCard'
import {PanelStyles, Path, TopBar, ProductCards} from './styles'
import {Heading1, Underline} from '../../typography/headings';
import {Button2} from '../../ui/buttons';

function Panel ({title, ...props}){
const [productData, setProductData] = useState(null)
useEffect(()=>{
    
    async function getProductData(){
        const productRef = ref(db, 'products')
        const productSnapShot = await get(productRef)
        setProductData(Object.values(productSnapShot.val()))
    }

    getProductData()

},[])    

    return(
        <PanelStyles>
            <TopBar>
                <Path>Home <MdKeyboardArrowRight color="212529" size="1.5rem"/> Products<MdKeyboardArrowRight color="212529" size="1.5rem"/> View All Inventory</Path>
                <Button2><MdDeleteOutline color="758173" size="1.25rem"/>Delete Product</Button2>
            </TopBar>    
            <Heading1 Weight="normal" Align="Left">{title || "Display Panel"}</Heading1>
            <Underline Color="#758173" Align="auto auto auto 0"/>
            
            { productData? productData.map(product=><ProductCard key={product.uid} product={product}/>) :<p>There is no data</p>}

        </PanelStyles>
    )
}

export default Panel