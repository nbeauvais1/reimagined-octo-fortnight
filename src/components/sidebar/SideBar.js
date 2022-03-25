import React from 'react'
import {Link, useNavigate} from 'react-router-dom';
import { signOut } from 'firebase/auth'
import { auth } from '../../libs/firebase'

import { AiOutlinePlus, AiOutlineEdit } from "react-icons/ai";
import { BiHomeHeart } from "react-icons/bi";
import { CgComment } from "react-icons/cg";
import { FaShippingFast, FaMoneyCheck } from "react-icons/fa";
import { GoSettings } from "react-icons/go";
import { IoAnalyticsSharp, IoPricetagOutline } from "react-icons/io5";
import { MdPointOfSale, MdOutlineAdminPanelSettings, MdKeyboardArrowRight} from "react-icons/md";
import { RiPlantLine } from "react-icons/ri";
import {Form} from '../../ui/forms';

import {SideBarStyles, SideBarGroup, SideBarItem, FlexItem} from './styles'
import {Button} from '../../ui/buttons';

function SideBar (props){

    function onLogoutRequest(e){
        signOut(auth)
    }

    return(

        <SideBarStyles>
            <SideBarGroup>
                <SideBarItem>
                    <FlexItem><BiHomeHeart color="758173" size="1.25rem"/>Home</FlexItem>
                    <MdKeyboardArrowRight color="C2C1C0" size="1.5rem"/>
                </SideBarItem>
            </SideBarGroup>
            
            {/* Products */}
            <SideBarGroup>
                <SideBarItem>
                    <FlexItem><RiPlantLine color="9C1D21" size="1.25rem"/><Link to="/dashboard">View All Products</Link></FlexItem>
                    <MdKeyboardArrowRight color="C2C1C0" size="1.5rem"/>
                </SideBarItem>
                <SideBarItem>
                    <FlexItem><AiOutlinePlus color="758173" size="1.25rem"/><Link to="add">Add New Product</Link></FlexItem>
                    <MdKeyboardArrowRight color="C2C1C0" size="1.5rem"/>
                </SideBarItem>
                <SideBarItem>
                    <FlexItem><AiOutlineEdit color="758173" size="1.25rem"/><Link to="edit">Edit Product</Link></FlexItem>
                    <MdKeyboardArrowRight color="C2C1C0" size="1.5rem"/>
                </SideBarItem>
                <SideBarItem>
                    <FlexItem><CgComment color="758173" size="1.25rem"/>Product Reviews</FlexItem>
                    <MdKeyboardArrowRight color="C2C1C0" size="1.5rem"/>
                </SideBarItem>
            </SideBarGroup>
            
            <SideBarGroup>
                <SideBarItem>
                    <FlexItem><FaShippingFast color="758173" size="1.25rem"/>Orders</FlexItem>
                    <MdKeyboardArrowRight color="C2C1C0" size="1.5rem"/>
                </SideBarItem>
                <SideBarItem>
                    <FlexItem><MdPointOfSale color="758173" size="1.25rem"/>Sales</FlexItem>
                    <MdKeyboardArrowRight color="C2C1C0" size="1.5rem"/>
                </SideBarItem>
                <SideBarItem>
                    <FlexItem><FaMoneyCheck color="758173" size="1.25rem"/>Transactions</FlexItem>
                    <MdKeyboardArrowRight color="C2C1C0" size="1.5rem"/>
                </SideBarItem>
                <SideBarItem>
                    <FlexItem><IoAnalyticsSharp color="758173" size="1.25rem"/>Analytics</FlexItem>
                    <MdKeyboardArrowRight color="C2C1C0" size="1.5rem"/>
                </SideBarItem>
            </SideBarGroup>
            
            <SideBarGroup>
                <SideBarItem>
                    <FlexItem><GoSettings color="758173" size="1.25rem"/>Store Settings</FlexItem>
                    <MdKeyboardArrowRight color="C2C1C0" size="1.5rem"/>
                </SideBarItem>
                <SideBarItem>
                    <FlexItem><MdOutlineAdminPanelSettings color="758173" size="1.25rem"/>Admin</FlexItem>
                    <MdKeyboardArrowRight color="C2C1C0" size="1.5rem"/>
                </SideBarItem>
            </SideBarGroup>
            <SideBarItem>
                <Button  onClick={onLogoutRequest} >Logout</Button>
            </SideBarItem>
        </SideBarStyles>
    )
}

export default SideBar