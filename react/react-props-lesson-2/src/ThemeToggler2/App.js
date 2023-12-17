import React, { useState } from 'react'
import ThemeContext from './Context/ThemeContext';
import Header from './Components/Header';
import BlogSection from './Components/BlogSection';


export default function App() {
    const themeHook = useState("light");

  return (
    <ThemeContext.Provider value={themeHook} >
        {/* <button onClick={()=> setTheme(theme === 'light' ? 'dark': 'light')}>
            {theme === 'light' ? 'Turn Dark': 'Turn Light'}
        </button> */}
        <div>
            <Header />
            <main>
                <BlogSection />
            </main>
        </div>
    </ThemeContext.Provider>
  )
}
