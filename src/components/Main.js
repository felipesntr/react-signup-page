import React from 'react'
import styled from 'styled-components'

export default function Main() {
    return (
        <Container>
            <h1>Join the <br />team.</h1>
        </Container>
    )
}


const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    h1{ 
        font-size: 50px;
        font-weight: bold;
        color: #343434;


        @media (max-width: 900px){
            display: none;
        }
    }
`