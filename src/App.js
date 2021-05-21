import React from 'react'
import Header from "./components/Header"
import {ThemeProvider} from "styled-components"
import * as theme from "./style/theme"
import styled from "styled-components"
import ProductCard from './components/ProductCard'
import {useSelector} from 'react-redux'
import CartItem from "./components/CartItem"
import ListMenu from './components/ListMenu'
import CalculateBox from './components/CalculateBox'

const Container = styled.div`
  display :flex;
  width : 100%;
  height :92vh;
`
const MenuContainer = styled.div`
  width :15%;
  padding : 0.5rem 0;
  padding-right : 0.5rem;
`
const ProductContainer = styled.div`
  width:60%;
  display:flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0.5rem 0.5rem;
  height: 100%;
  border-left : 1px solid #f7f7f7;
  border-right : 1px solid #f7f7f7;
`
const CartContainer = styled.div`
  width:25%;
  padding: 0.5rem 0;
`
const App = () =>{
  const products = useSelector(state=>state.product.products)
  const carts = useSelector(state=>state.product.carts)
  return(
    <ThemeProvider theme={theme}>
      <Header/>
      <Container>
          <MenuContainer> <ListMenu/> </MenuContainer>
          <ProductContainer> 
            {products.map(product=>
              <ProductCard key={product.id} item={product} /> 
              )}
          </ProductContainer>
          <CartContainer>
            <p>{carts ? `${carts.length} item in carts` : '0 item in carts'}</p>
            {carts.map(item =>
              <CartItem key={item.id} item={item}/>
              )}
            <CalculateBox/>
          </CartContainer>
      </Container>
    </ThemeProvider>
  )
}

export default App