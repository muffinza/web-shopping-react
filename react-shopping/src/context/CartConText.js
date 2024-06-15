import { createContext,useContext,useReducer,useEffect } from "react";
import products from "../data/products";
import cartReducer from "../reducer/cartReducer"
import { type } from "@testing-library/user-event/dist/type";
//การสร้าง context
const CartContext = createContext()

const initState={
    products:products,
    total:0,  //ยอดรวม
    amount:0  //จำนวนสินค้า
}

export const CartProvider =({children})=>{ //ตัวกระจายข้อมูล  children คือ component ที่จะไปใช้งาน
   const [state,dispatch] = useReducer(cartReducer,initState)  //เก็บค่า initState
   useEffect(()=>{
    dispatch({
        type:"CALCULATE_TOTAL"
    })
        //คำนวนหาผลรวม
   },[state.products])//เปิดหน้าครั้งเเรก
   function formatMoney(money){
    return money.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }
   //กระจายข้อมูลไปให้ app component
   return (
    <CartContext.Provider value={{...state,formatMoney}} >  
        {children}  
    </CartContext.Provider>
   )
}

//การนำ context ไปใช้งานข้างนอก
export const useCart=()=>{
    return useContext(CartContext)
}

