// react imports
import { createContext, useReducer } from 'react';

// creating authentication context
export const AuthContext = createContext();

// reducer function
export const AuthReducer = (state, action) => {
  switch (action.type) {
    case 'SIGNUP':
      return { ...state, user: action.payload };
    case 'LOGIN':
      return {...state, user: action.payload };
    case 'LOGOUT':
      return state;
    default:
      return state;
  }
};

// creating authentication provider component
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, {
    user: null,
  });

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
