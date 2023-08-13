const initialstate = {
    cartItems: [],
    grandTotalPrice:0,
    cartItemsCount:0
};
export const mycartReducer = (state = initialstate, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
             const cartItem = state.cartItems.find((item) => item.id === action.payload.id)
             if (cartItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map(item => item.id === action.payload.id
                        ? {
                          ...item,
                          quantity: item.quantity + 1, 
                          totalPrice:item.totalPrice + item.price,                         
                        }
                        : item
                      ),
                    grandTotalPrice: state.grandTotalPrice + action.payload.totalPrice,
                    cartItemsCount: state.cartItemsCount + 1
                }
             }  
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload],
                grandTotalPrice: state.grandTotalPrice + action.payload.totalPrice,
                cartItemsCount: state.cartItemsCount + 1
            };
        case "DELETE_CART_PRODUCT":
                return{
                    cartItems : [...state.cartItems.filter(cartitem => cartitem.id !== action.payload.id)],
                    grandTotalPrice: state.grandTotalPrice - action.payload.totalPrice,
                    cartItemsCount: state.cartItemsCount - action.payload.quantity
                }
        case "INCREASE_PRODUCT_QUANTITY":                
                const cartItemIncrease = state.cartItems.find((item) => item.id === action.payload)
                if (cartItemIncrease) {
                    return {
                        ...state,
                        cartItems: state.cartItems.map(item => item.id === action.payload
                            ? {
                              ...item,
                              quantity: item.quantity + 1, 
                              totalPrice:item.totalPrice + item.price,                         
                            }
                            : item
                          ),
                        grandTotalPrice: state.grandTotalPrice + cartItemIncrease.totalPrice,
                        cartItemsCount: state.cartItemsCount + 1
                    }
                }  
        case "DECREASE_PRODUCT_QUANTITY":                
                const cartItemDecrease = state.cartItems.find((item) => item.id === action.payload)
                if (cartItemDecrease && cartItemDecrease.quantity > 1) {
                    return {
                        ...state,
                        cartItems: state.cartItems.map(item => item.id === action.payload
                            ? {
                              ...item,
                              quantity: item.quantity - 1, 
                              totalPrice:item.totalPrice - item.price,                         
                            }
                            : item
                          ),
                        grandTotalPrice: state.grandTotalPrice - cartItemDecrease.totalPrice,
                        cartItemsCount: state.cartItemsCount - 1
                    }
                }  
        default:
            return state;
    }
}