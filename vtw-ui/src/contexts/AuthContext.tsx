import React, { createContext, useCallback, useContext, useState } from "react";
import { api } from "../services/api";

type User = {
  name: string;
  username: string;
  email: string;
  password: string;
};

type AuthUser = {
  id: string;
} & User;


interface AuthState {
  user: AuthUser;
  token: string;
}

interface SignInCredentials {
  email: string;
  password: string;
}

type AuthContextType = {
  user: AuthState;
  signIn: (credentials: SignInCredentials) => Promise<void>;
  signUp: (user: User, navigate: (path: string) => void) => Promise<void>;
  signOut: () => void;
};

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);

type Props = {
  children?: React.ReactNode;
};

const AuthProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState<AuthState>(() => {
    const token = localStorage.getItem("@AnatiQuanti:token");
    const user = localStorage.getItem("@AnatiQuanti:user");

    if (token && user) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      return {
        token,
        user: JSON.parse(user),
      };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }: SignInCredentials) => {
    const response = await api.post("/auth/local", { identifier: email, password });
    const { jwt, user } = response.data;

    localStorage.setItem("@AnatiQuanti:token", jwt);
    localStorage.setItem("@AnatiQuanti:user", JSON.stringify(user));

    api.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;

    setUser({ token: jwt, user });
  }, []);

  const signUp: AuthContextType["signUp"] = useCallback(async ({ username, email, password }, navigate) => {
    try {
      const response = await api.post("/auth/local/register", {
        username,
        email,
        password,
      });

      const { jwt, user } = response.data;

      localStorage.setItem("@AnatiQuanti:token", jwt);
      localStorage.setItem("@AnatiQuanti:user", JSON.stringify(user));

      api.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;

      setUser({ token: jwt, user });
      navigate("/");
    } catch (error) {
      console.error("Registration failed:", error.response);
      throw new Error("Registration failed. Please check your inputs and try again.");
    }
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem("@AnatiQuanti:token");
    localStorage.removeItem("@AnatiQuanti:admin");

    setUser({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        signIn,
        signUp,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextType {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within a AuthProvider");
  }

  return context;
}

export { AuthProvider, useAuth };
