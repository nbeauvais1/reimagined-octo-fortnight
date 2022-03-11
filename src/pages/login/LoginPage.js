import React from 'react';
import {Link, useNavigate} from 'react-router-dom';

import {LoginPageStyles, LoginBox, Div, ContentDiv, Logo} from './styles.js';
import {Button} from '../../ui/buttons';
import {Form, Input, ForgotPassword} from '../../ui/forms';
import {Heading1, Underline} from '../../typography/headings';
import plants from './loginImage.jpg';
import logo from './logo.svg';

// Add an eventListener

function LoginPage (props){
    let navigation = useNavigate();

    function onHandleSubmit(e){
        e.preventDefault();
        navigation('dashboard');
    }

    return (        
        <>
            <LoginPageStyles>
                <LoginBox>
                    <Div>
                        <img src={plants} alt="Many house plants pressed up against and old window." />
                    </Div>
                    <ContentDiv>                    
                        
                        <Logo src={logo} alt="The plant store logo."/>

                        <Heading1>Sign Into the Dashboard</Heading1>
                        <Underline/>
                        <Form onSubmit={onHandleSubmit}>

                            <label htmlFor="username">username</label>
                            <Input name="username" type="text" placeholder="insert username here"/>

                            <label htmlFor="loginPass">password</label>
                            <Input name="loginPass" type="password" placeholder="insert password here"/>

                            <ForgotPassword href="#">Forgot Username or Password</ForgotPassword>
                            <Button type="submit">Login</Button>
                        </Form>
                    </ContentDiv>
                </LoginBox>    
            </LoginPageStyles>
        </>
    )
}

export default LoginPage