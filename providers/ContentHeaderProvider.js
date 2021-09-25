import { createContext, useContext, useReducer } from 'react';

const initialState = { show: true, title: '', suffixComponent: null };

const reducer = (state, action) => {
  switch (action.type) {
    case 'setTitle':
      return { ...state, title: action.payload };
    case 'setSuffixComponent':
      return { ...state, suffixComponent: action.payload };
    case 'show':
      return { ...state, show: action.payload };
    default:
      throw new Error();
  }
};

const useContentHeaderHook = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setTitle = (val) => dispatch({ type: 'setTitle', payload: val });
  const setSuffixComponent = (val) => dispatch({ type: 'setSuffixComponent', payload: val });

  const setShow = (val) => dispatch({ type: 'show', payload: val });

  return {
    state,
    setTitle,
    setSuffixComponent,
    setShow,
  };
};

const context = createContext([{}, function () {}]);

// provider
export const ContentHeaderProvider = ({ children }) => {
  const hook = useContentHeaderHook();

  return <context.Provider value={hook}>{children}</context.Provider>;
};

// consumer
export const useContentHeaderConsumer = () => {
  return useContext(context);
};
