const TYPESAUTH = {
    loginUser: "LOGIN_USER",
    logout: "LOGOUT"
}


const authState = { auth: {} };


const authReducer = (state, action) => {
    switch (action.type) {
        case TYPESAUTH.loginUser: {
            const { payload } = action;

            return {
                ...state,
                auth: {
                    ...state.auth,
                    ...payload
                }
            }
        }
        case TYPESAUTH.logout : {
            return {
                ...state,
                auth: { }
            }
        }
        default:
            return state;
    }
}


export { authState, TYPESAUTH };
export default authReducer;