import { createContext } from "react";

//createContext()

const ThemeContext = createContext(["light", () => {}])
export default ThemeContext;