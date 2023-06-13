import { createContext } from 'react';

const basketContext = createContext(
  JSON.parse(localStorage.getItem("basket")) || []
);

export default basketContext