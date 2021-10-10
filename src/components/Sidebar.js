import React from 'react'
import styled from 'styled-components'
import logo from '../assets/Rectangle-3.svg';
import Input from './Input';

export default function Sidebar() {
    return (
        <div>
            <Container>
                <LogoWrapper>
                    <img src={logo} alt="" />
                    <h3>
                        Feli <span>Codes</span>
                    </h3>
                </LogoWrapper>
                <Form>
                    <h3>Sign Up</h3>

                    <Input placeholder="Full Name" />
                    <Input placeholder="E-mail" type="email"/>
                    <Input placeholder="Password" type="password"/>
                    <Input placeholder="Confirm Password" type="password"/>
                    <button>Sign Up</button>

                    <h4>
                        Already have an account? <a href="#">Sign In.</a>
                    </h4>
                </Form>
                <div>
                    <Terms>
                        By signing up, I agree to the Privacy Policy <br /> and Terms of Service.
                    </Terms>

                </div>
            </Container>
        </div>
    )
}

const Terms = styled.p`
    paddin: 0 1rem;
    text-align: center;
    font-size: 10px;
    font-weight: 300;
    color: #808080;

`;


const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    h3 {
        color: #666666;
        margin-bottom: 2rem;
    }

    h4 {
        color: #808080;
        font-weight: bold;
        font-size: 13px;
        margin-top: 2rem;

        a {
            color: #ff8d8d;
            text-decoration: none;
        }
    }

    button {
        width: 75%;
        max-width: 350px;
        min-width: 250px;
        height: 40px;
        border: none;
        cursor: pointer;
        box-shadow: 0px 14px 9px -15px rgba(0,0,0,0.15);
        border-radius: 8px;
        margin: 1rem 0;
        background: #70edb9;
        color: #fff;
        font-weight: 600;
        transition: all 0.2s ease-in-out;
        &:hover{
            transform: translateY(-3px);
        }
    }
`;

const LogoWrapper = styled.div`
    img{
        height: 6rem;
    }
    h3{
        text-align: center;
        color: #ff8d8d;
        font-size: 22px;
    }
    span{
        color: #5dc399;
        font-size: 18px;
    }
`;

const Container = styled.div`
    min-width: 400px;
    height: 100%;
    backdrop-filter: blur(35px);
    background-color: rgba(255, 255, 255, 0.8);
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding: 0 2rem;

    @media (max-width: 900px){
        position: absolute;
        padding: 0;
        width: 100vw;
    }
`;