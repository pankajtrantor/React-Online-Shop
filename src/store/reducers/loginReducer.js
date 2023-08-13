const initialstate = {
    user: [],
    isuserloggedin : false,
    message : null
};

export const loginReducer = (state = initialstate, action) => {
    switch (action.type) {
        case "LOGIN_USER":
            console.log(action.users)
            const users=action.users;
             const user = users.find((usr) => usr.username === action.payload.username && usr.password === action.payload.password)
             if (user) {
                 return {
                    ...state,
                    user: [action.payload],
                    isuserloggedin : true,
                    message: "User login successfully.",
                 }
              }  
              else {
                return {
                    ...state,
                    isuserloggedin : false,
                    message: "Username/password is incorrect",
                 }
              }
             return{
                 ...state,
                 isuserloggedin:false,
                 message:null,
             }
        case "LOGOUT_USER":
            console.log("sdsdsd")
            return{
                    user:[],
                 userAlreadyRegister:false,
                 message:null,
            }
        default:
            return state;
    }

}