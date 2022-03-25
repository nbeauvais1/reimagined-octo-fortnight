import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';

import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../../libs/firebase';
import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {BiError} from 'react-icons/bi'
import {LoginPageStyles, LoginBox, Div, ContentDiv, Logo} from './styles.js';
import {Button} from '../../ui/buttons';
import {Form, Input, ForgotPassword} from '../../ui/forms';
import {Heading1, Underline} from '../../typography/headings';
import plants from './loginImage.jpg';
import logo from './logo.svg';

// Add an eventListener

function LoginPage (props){

    const navigator = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    
    const notify = (error) => toast.error(error.code,{
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        icon:<BiError/>
  
    });

    function onHandleSignIn (e){
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then(userCrediental=>{
            navigator('dashboard');
        })
        .catch(error=>{
            notify(error)
        })
    }

    return (        
        <>
            <LoginPageStyles>
             <ToastContainer/>
                <LoginBox>
                    <Div>
                        <img src={plants} alt="Many house plants pressed up against and old window." />
                    </Div>
                    <ContentDiv>                    
                        
                        <Logo src={logo} alt="The plant store logo."/>

                        <Heading1>Sign Into the Dashboard</Heading1>
                        <Underline/>
                        <Form onSubmit={onHandleSignIn}>

                            <label htmlFor="username">username</label>
                            <Input name="username" type="text" placeholder="insert username here" onChange={(e)=> setEmail(e.target.value) }/>

                            <label htmlFor="loginPass">password</label>
                            <Input name="loginPass" type="password" placeholder="insert password here" onChange={(e)=> setPassword(e.target.value) }/>

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