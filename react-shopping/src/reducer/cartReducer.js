const CartReducer = (state, action) => {
  //กระบวนการจัดการ state ผ่าน action
  if (action.type === "CALCULATE_TOTAL") {
    const { total, amount } = state.products.reduce(
      (cartTotal, item) => {
        const { price, quantity } = item;
        const totalprice = price * quantity; //ยอดรวมสินค้าเเต่ละรายการ
        cartTotal.total += totalprice; //จำนวนเงินรวม
        cartTotal.amount += quantity; //ปริมาณรวม
        return cartTotal;
      },
      {
        //return ค่า
        total: 0,
        amount: 0,
      }
    );
    return {
      ...state,
      total,
      amount,
    };
  }

  if (action.type === "REMOVE") {
    return {
      ...state,
      products: state.products.filter((e) => e.id !== action.payload),
    };
  }

  if (action.type === "ADD") {
   let updateProduct = state.products.map((e) => {
      if (e.id === action.payload) {
        return {
          ...e,
          quantity: e.quantity + 1,
        };
      }
      return e;
    });
    return{
        ...state,products:updateProduct
      }
  }

  if (action.type === "SUBTRACT") {
    let updateProduct = state.products.map((e) => {
       if (e.id === action.payload) {
         return {
           ...e,
           quantity: e.quantity - 1,
         };
       }
       return e;
     }).filter((e)=>e.quantity !== 0)
     return{
         ...state,products:updateProduct
       }
   }

 
};

export default CartReducer;
