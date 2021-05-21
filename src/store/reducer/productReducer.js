import {products} from "../../utils/data"

const initialState={
    products:products,
    carts:[]
}
const productReducer=(state=initialState, action) =>{
    const{type,payload} =action
    switch(type){
        default :
            return state
        case "ADD_TO_CART":
            const itemInCart = state.carts.find(item=>item.id===payload)
            const newItemCart = state.products.find(item=>item.id===payload)
            if(!itemInCart){
                return{
                    ...state,
                    carts : [...state.carts, newItemCart]
                }
            }else{
                return state
            }
        case "INCREMENT":
            const originalProduct = state.products.find(item=>item.id===payload).price
            const inCart = state.carts.map(item=>{
                if(item.id===payload){
                    return{
                        ...item,
                        price:item.price + originalProduct
                    }
                }else {
                    return item
                }
            })
            return {
                ...state,
                carts :inCart
            }
        case "DECREMENT":
            const oriProduct = state.products.find(item=>item.id===payload).price
            const deCart = state.carts.map(item=>{
                if(item.id===payload){
                    return{
                        ...item,
                        price:item.price - oriProduct
                    }
                }else {
                    return item
                }
            })
            return {
                ...state,
                carts :deCart
            }
        case "REMOVE" :
            return{
                ...state,
                carts : state.carts.filter(item =>item.id !== payload)
            }
        case "RESET":
            return{
                ...state,
                carts:[]
            }
    }
}
export default productReducer