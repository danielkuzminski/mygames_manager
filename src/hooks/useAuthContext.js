// react imports
import { useContext } from 'react';

// authentication context
import { AuthContext } from '../context/AuthContext';

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (context === 'undefined') {
    throw Error('out of context scope');
  }

  return context;
};
