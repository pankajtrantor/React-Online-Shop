const cartItems = [
    {
      id: 0,
      title: "",
      image:"",
      price:"",
      discount:""
    }
  ];
const initialstate = {
    cartItems: []
};
export const mycartReducer = (state = [], action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            console.log(action.payload);
           return [...state,
            action.payload
           ]
        default:
            return state;
    }
}