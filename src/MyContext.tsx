// MyContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface MyContextType {
  aufwandOne: string;
  setAufwandOne: (value: string) => void;
  aufwandTwo: string;
  setAufwandTwo: (value: string) => void;
  aufwandThree: string;
  setAufwandThree: (value: string) => void;
  aufwandFour: string[];
  setAufwandFour: (values: string[]) => void;
  aufwandFive: string[];
  setAufwandFive: (value: string[]) => void;
  aufwandSix: string;
  setAufwandSix: (value: string) => void;
  aufwandSeven: string;
  setAufwandSeven: (value: string) => void;
  // Add similar state and setter pairs for other CheckBoxes (aufwandThree, aufwandFour, etc.)
}

const MyContext = createContext<MyContextType | undefined>(undefined);

export function MyContextProvider({ children }: { children: ReactNode }) {
  const [aufwandOne, setAufwandOne] = useState<string>('');
  const [aufwandTwo, setAufwandTwo] = useState<string>('');
  const [aufwandThree, setAufwandThree] = useState<string>('');
  const [aufwandFour, setAufwandFour] = useState<string[]>([]);
  const [aufwandFive, setAufwandFive] = useState<string[]>([]);
  const [aufwandSix, setAufwandSix] = useState<string>('');
  const [aufwandSeven, setAufwandSeven] = useState<string>('');
  // Initialize state variables for other CheckBoxes as needed

  return (
    <MyContext.Provider
      value={{
        aufwandOne,
        setAufwandOne,
        aufwandTwo,
        setAufwandTwo,
        aufwandThree,
        setAufwandThree,
        aufwandFour,
        setAufwandFour,
        aufwandFive,
        setAufwandFive,
        aufwandSix,
        setAufwandSix,
        aufwandSeven,
        setAufwandSeven,
      }}
    >
      {children}
    </MyContext.Provider>
  );
}

export function useMyContext() {
  const context = useContext(MyContext);
  if (context === undefined) {
    throw new Error('useMyContext must be used within a MyContextProvider');
  }
  return context;
}
