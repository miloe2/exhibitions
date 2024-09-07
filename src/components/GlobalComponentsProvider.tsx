// // components/GlobalComponentsProvider.tsx
// import React, { createContext, useContext, ReactNode, FC } from 'react';
// import Button from './elements/Button';
// import Header from './elements/Header';
// import Text from './elements/Text';

// // Define the type for the context value
// interface GlobalComponentsContextType {
//   Button: typeof Button;
//   Header: typeof Header;
//   Text: typeof Text;
// }

// // Create the context with the type
// const GlobalComponentsContext = createContext<GlobalComponentsContextType | undefined>(undefined);

// // Hook to use global components
// export const useGlobalComponents = () => {
//   const context = useContext(GlobalComponentsContext);
//   if (!context) {
//     throw new Error('useGlobalComponents must be used within a GlobalComponentsProvider');
//   }
//   return context;
// };

// // Define the props type for the provider
// interface GlobalComponentsProviderProps {
//   children: ReactNode;
// }

// // Create the provider component with the correct types
// export const GlobalComponentsProvider: FC<GlobalComponentsProviderProps> = ({ children }) => (
//   <GlobalComponentsContext.Provider value={{ Button, Header, Text }}>
//     {children}
//   </GlobalComponentsContext.Provider>
// );
