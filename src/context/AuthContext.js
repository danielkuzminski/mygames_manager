// react imports
import { createContext, useReducer } from 'react';

// creating authentication context
export const AuthContext = createContext();

export const AuthReducer = (state, action) => {
  switch (action.type) {
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
