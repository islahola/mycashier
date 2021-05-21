import React from 'react'
import styled from 'styled-components'

const MyBtn =styled.button`
    height: 1.7rem;
    width:6rem;
    border :none;
    padding:0.2rem 0.5rem;
    text-align: center;
    cursor: pointer;
    color :#fff;
    &:focus{
        outline:none;
    }
`
const PrimaryBtn = styled(MyBtn)`
    background: ${props=>props.theme.primary};
`
const WarningBtn = styled(MyBtn)`
    background: ${props=>props.theme.tertiary};
`


const Button = ({primary, action}) => {
    if(primary){
        return  <PrimaryBtn onClick={action}>Selesai</PrimaryBtn>
    }else{
        return <WarningBtn onClick={action}>Cancel</WarningBtn>
    }
}

export default Button
