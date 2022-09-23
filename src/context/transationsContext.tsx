import axios from "axios";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

type Transition = {
  id: string,
  type: string,
  title: string,
  value: number,
  category: string,
  date: string
}

type HandleTransitionProps = {
  transitions: Transition[],
  setTransitions: (arg: Transition[]) => void
}

type TransitionProps = {
  children: ReactNode;
}

const TransitionContext = createContext<HandleTransitionProps>({} as HandleTransitionProps)

export const TransitionProvider = ({ children }: TransitionProps) => {
  const [transitions, setTransitions] = useState<Transition[]>([]);

  const getTransition = async () => {
    const response = await axios.get('http://localhost:3001/transition');
    setTransitions(response.data.data);
  };

  useEffect(() => {
    getTransition();
  }, [])

  return (
    <TransitionContext.Provider
      value={{
        transitions,
        setTransitions
      }}
    >
      {children}
    </TransitionContext.Provider>
  );
}

export const useTransition = () => {
  const { transitions, setTransitions } = useContext(TransitionContext);
  return { transitions, setTransitions };
}