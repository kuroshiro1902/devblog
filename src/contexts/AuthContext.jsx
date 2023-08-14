import { createContext, useReducer } from 'react';
export const AuthContext = createContext();
const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { account: action.payload };
    case 'LOGOUT':
      return { account: null };

    default:
      return state;
  }
};
function AuthContextProvider({ children }) {
  const [account, dispatch] = useReducer(authReducer, { account: null });
  console.log('account: ', account);
  return <AuthContext.Provider value={{ state, dispatch }}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
