const initialstate = {
    users: [],
    userAlreadyRegister : false,
    message : null
};

export const signupReducer = (state = initialstate, action) => {
    switch (action.type) {
        case "REGISTER_USER":
             const user = state.users.find((usr) => usr.username === action.payload.username)
             if (!user) {
                 return {
                    ...state,
                    users: [...state.users, action.payload],
                    userAlreadyRegister : false,
                    message: "User registered successfully.",
                 }
              }  
             return{
                 ...state,
                 userAlreadyRegister:true,
                 message:"Username already exists",
             }
        case "RESET_USER_SIGNUP":
            return{
                ...state,
                 userAlreadyRegister:false,
                 message:null,
            }
        default:
            return state;
    }

}