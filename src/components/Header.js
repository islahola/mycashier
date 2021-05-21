import React from "react"
import styled from "styled-components"

const Head = styled.div`
    height : 8vh;
    display :flex;
    justify-content : center;
    align-items: center;
    background:${props=> props.theme.primary};
    padding : 1rem 0;
    color :${props=>props.theme.white}; 
`

const Header = () =>{
    return(
        <Head>
            <h1>Kaasir</h1>
        </Head>
    )
}
export default Header