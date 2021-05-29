import React from 'react'
import styled from "styled-components"

const Login = () => {
    return (
        <Container>
            <CTA>
                <CTALogoOne src='/images/cta-logo-one.svg'/>
                <SignUp>GET ALL THERE</SignUp>
                <Description>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Description>
                <CTALogoTwo src="/images/cta-logo-two.png"/>
            </CTA>
        </Container>
    )
}

export default Login

const Container = styled.div`
    position: relative;
    height: calc(100vh - 70px);
    display: flex;
    align-items: top;
    justify-content: center;

    &:before {
        background-position: top;
        background-size: cover;
        background-repeat: no-repeat;
        position: absolute;
        content: "";
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        opacity: 0.75;
        background-image: url("/images/login-background.jpg");
        z-index: -1;
    }
`

const CTA = styled.div`
    margin-top: 100px;
    max-width: 650px;
    padding: 80px 40px;
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const CTALogoOne = styled.img`
`

const SignUp = styled.a`
    width: 100%;
    background-color: #0062e5;
    font-weight: bold;
    padding: 17px 0;
    color: #f9f9f9;
    border-radius: 4px;
    text-align: center;
    font-size: 1em;
    cursor: pointer;
    transition: all 250ms;
    letter-spacing: 1.5px;
    margin-top: 8px;
    margin-bottom: 12px;

    &:hover {
        background: #0483ee;
    }
`

const Description = styled.div`
    text-align: center;
    font-size: 11px;
    letter-spacing: 1.5px;  
`

const CTALogoTwo = styled.img`
    margin-top: 15px;
    width: 90%;
`