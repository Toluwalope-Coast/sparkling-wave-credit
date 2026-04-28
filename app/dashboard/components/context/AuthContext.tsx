// context/AuthContext.tsx
"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { deleteTokenFromCookies, getTokenFromCookies } from "@/lib/cookies";
import { getSingleApiRequest } from "@/lib/apiRequest";

interface UserData {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  profile_image_url?: string | null;
  gender?: string;
  remita_customer_id?: string;
}

interface AuthContextProps {
  isLoggedIn: boolean;
  userData: UserData | null;
  loading: boolean;
  error: boolean;
  logout: () => void;
  refreshUserData: () => Promise<void>;
  updateUserData: (updates: Partial<UserData>) => void;
}

const AuthContext = createContext<AuthContextProps | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchUserData = async () => {
    try {
      setLoading(true);
      setError(false);
      const token = getTokenFromCookies();

      if (token) {
        const data = await getSingleApiRequest("/api/borrowers_me/");
        setUserData(data);
        setIsLoggedIn(true);
      } else {
        setUserData(null);
        setIsLoggedIn(false);
      }
    } catch (err) {
      console.error("Error fetching user data:", err);
      setError(true);
      setUserData(null);
      setIsLoggedIn(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const logout = () => {
    deleteTokenFromCookies();
    setIsLoggedIn(false);
    setUserData(null);
    setError(false);
  };

  const refreshUserData = async () => {
    await fetchUserData();
  };

  const updateUserData = (updates: Partial<UserData>) => {
    setUserData((prevData) => {
      if (!prevData) return null;
      const updatedData = { ...prevData, ...updates };

      // Optional: Trigger a background refresh to ensure data consistency
      // This helps verify the update with the server after a short delay
      setTimeout(() => {
        fetchUserData();
      }, 2000);

      return updatedData;
    });
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        userData,
        loading,
        error,
        logout,
        refreshUserData,
        updateUserData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
