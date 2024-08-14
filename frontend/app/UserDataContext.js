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
  tags: [],
};

export const UserDataProvider = ({ children }) => {
  const [state, setState] = useState(initialUserData);

  const updateEvents = (val, tag, isSavingEvent) => {
    if (isSavingEvent) {
      setState((prev) => {
        return {
          ...prev,
          events: [...prev.events, val],
          tags: [...prev.tags.concat(tag)],
        };
      });

      const userData = {
        events: [...state.events, val],
        tags: [...state.tags.concat(tag)],
      };

      localStorage.setItem("userData", JSON.stringify(userData));
    } else {
      setState((prev) => {
        return {
          ...prev,
          events: prev.events.filter((evt) => evt.index != val.index),
          tags: [...prev.tags.filter((tag) => !tag.includes(tag))],
        };
      });

      const userData = {
        events: state.events.filter((evt) => evt.index != val.index),
        tags: [...state.tags.filter((tag) => !tag.includes(tag))],
      };

      localStorage.setItem("userData", JSON.stringify(userData));
    }
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
