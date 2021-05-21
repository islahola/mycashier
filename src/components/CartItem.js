import React, {useState} from 'react'
import styled from 'styled-components'
import Counter from './Counter'
import {useDispatch} from 'react-redux'
import {inc,dec,remove} from "../store/action/Product"
const Cart =styled.div`
    display : flex;
    width: 95%;
    justify-content :space-between;
    align-items: center;
    height: 3rem;
    padding: 0 0.8rem;
    margin: 0.5rem auto;
    background: #fff;
    box-shadow: 1px 1px 10px 1px #ccc;
`
const ConterContainer = styled.div`
    display: flex;
    width: 30%;
    text-align: center;
`
const Name = styled.div`
width : 25%;
`
const Price = styled.div``
const CounterTotal = styled.div`
    margin:0 0.5rem;
    display:flex;
    align-items: center;
`

const CartItem = ({item}) => {
    const [count, setcount] =useState(1)
    const dispatch =useDispatch()
    const incriment =id=>{
        setcount(count+1)
        dispatch(inc(id))
    }
    const decrement= id=>{
        setcount(count-1)
        if(count>1){
            dispatch(dec(id))
        }else if(count===1){
            dispatch(remove(id))
        }

    }
    return (
        <div>
            <Cart>
                <Name>{item.name}</Name>
                <ConterContainer>
                    <Counter inc ={()=>incriment(item.id)}/>
                    <CounterTotal>{count}</CounterTotal>
                    <Counter dec={()=>decrement(item.id)}/>
                </ConterContainer>
                <Price>{item.price}</Price>
            </Cart>
        </div>
    )
}

export default CartItem
