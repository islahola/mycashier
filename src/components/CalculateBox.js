import React,{useState} from 'react'
import styled from 'styled-components'
import Button from './Button'
import {useSelector} from "react-redux"
import {resetCart} from "../store/action/Product"
import {useDispatch} from 'react-redux'
const Box = styled.div`
    position : fixed;
    bottom :0;
    width :20rem;
    height: 8rem;
    box-shadow: 1px 1px 10px 1px #ccc;
    padding: 0.4rem;
    margin-left: -0.4rem;
`
const Total = styled.div`
    display: flex;
    justify-content : space-between;
    margin-bottom: 0.4rem;
`
const Pay = styled.div`
    display: flex;
    justify-content : space-between;
    margin-bottom: 0.4rem;
    input[type=number]{
        border:none;
        border-bottom: 1px solid #000;
        font-weight :bold;
        text-align: right;
        &:focus{
            outline: none;
        }
        &::-webkit-inner-spin-button,
        &::-webkit-outer-spin-button{
            -webkit-appearance:none;
        }
    }
`
const Change= styled.div`
     display: flex;
    justify-content : space-between;
    margin-bottom: 0.4rem;
`
const BtnBox= styled.div`
    display: flex;
    justify-content : space-between;
    margin-bottom: 0.4rem;
`
const CalculateBox = () => {
    const carts = useSelector(state=>state.product.carts)
    const [pay,setPay]=useState("")
    const [change,setChange]=useState("")
    const total = carts.reduce((totalPrice, current)=>totalPrice+current.price,0)
    const handleChange = e =>{
        setPay(e.target.value)
    }
    const calculateChange =()=>{
        if(pay > total){
            setChange(pay-total)
        }
    }
    const dispatch =useDispatch()
    const reset =()=>{
        dispatch(resetCart())
        setChange(" ")
        setPay("")
    }
    return (
        <Box>
            <Total> 
                <h4>Total</h4>
                <p>{total}</p>
            </Total>
            <Pay>
                <p>Jumlah Bayar</p>
                <input type="number" value={pay} onChange={handleChange}/>
            </Pay>
            <Change>
                <p>Kembalian</p>
                <p>{change}</p>
            </Change>
            <BtnBox>
                <Button primary action={calculateChange}/>
                <Button action={reset}/>
            </BtnBox>
        </Box>
    )
}

export default CalculateBox
