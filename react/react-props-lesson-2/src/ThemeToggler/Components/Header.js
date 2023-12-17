import React, {useContext} from 'react'
import ThemeContext from '../Context/ThemeContext'
import ThemeColors from '../Utils/Colors'

export default function Header() {
    const theme = useContext(ThemeContext);
    const themeCSS = ThemeColors[theme];
    console.log(themeCSS);
    // console.log(theme)
  return (
    <header 
        style={{
            color: `${themeCSS.textColor}`,
            backgroundColor: `${themeCSS.backgroundColor}`,
            border : `1px solid ${themeCSS.border}`
        }}
    >
        <nav>
            <ul style={{display: 'flex', listStyle: 'none', columnGap: '5px'}}>
                <li>Home</li>
                <li>About</li>
                <li>Blog</li>
                <li>Logout</li>
            </ul>
        </nav>
    </header>
  )
}
