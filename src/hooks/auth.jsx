import {
  createContext,
  useContext,
  useState,
  useEffect
} from 'react';
import Cookies from 'js-cookie';

const AuthContext = createContext({});

import { api } from "../services/api";

function AuthProvider({ children }) {
  const [data, setData] = useState({});

  async function signIn({ email, password }) {
    try {
      const response = await api.post(
        "sessions", 
        { email, password },
        {withCredentials: true })
      const { user } = response.data;

      localStorage.setItem("@estock:user", JSON.stringify(user));

      setData({ user });

    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível entrar.");
      }
    }
  };

  function signOut() {
    // Remover dados do localStorage
    localStorage.removeItem("@estock:user");
    
    // Remover token do cookie
    Cookies.remove('token');

    setData({});
  
    // Limpar o estado de dados (se necessário)
  }


  useEffect(() => {
;
    const user = localStorage.getItem("@estock:user");

    if (user) {

      setData({

        user: JSON.parse(user)
      });
    }
  }, []);

  return (
    <AuthContext.Provider value={{
      signIn,
      signOut,
      user: data.user
    }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };