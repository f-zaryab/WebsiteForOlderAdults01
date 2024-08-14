"use client";
import React, { createContext, useContext, useState } from "react";

const UserDataContext = createContext();

export const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
};

const initialUserData = {
  events: [],
  tags: []
}

export const UserDataProvider = ({ children }) => {
  const [state, setState] = useState(initialUserData);

  const updateEvents = (val, tag) => {
    setState(prev => {
      return {
        ...prev,
        events: [...prev.events, val],
        tags: [...prev.tags.concat(tag)]
      }
    });
  };

  return (
    <UserDataContext.Provider value={{ state, updateEvents }}>
      {children}
    </UserDataContext.Provider>
  );
};

export const useUserData = () => {
  const context = useContext(UserDataContext);

  if (!context) {
    throw new Error("useCounter must be used within a CounterProvider");
  }

  return context;
};
