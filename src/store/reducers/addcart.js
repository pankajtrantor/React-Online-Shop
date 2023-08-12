const initialize = 0;

const MyCart = (state = initialize, action) => {
    switch (action.type) {
        case "ADD-TO-CART":
          
        console.log(action.state);
           console.log(action.payload);
            
            return state + 1;
        default:
            return state;
    }
}
export default MyCart;
